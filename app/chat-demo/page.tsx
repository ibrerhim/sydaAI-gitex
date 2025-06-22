"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, ShoppingCart, CreditCard, Check } from "lucide-react"

type MessageType = {
  role: "user" | "assistant" | "system"
  content: string
  timestamp: Date
}

type OrderStep = "inquiry" | "product" | "checkout" | "confirmation" | null

export default function ChatDemo() {
  const [messages, setMessages] = useState<MessageType[]>([
    {
      role: "system",
      content:
        "Welcome to Smart-ops AI Demo! This simulates how our AI assistant would interact with your customers on WhatsApp or Instagram. Try asking about products, placing an order, or asking for support.",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [orderStep, setOrderStep] = useState<OrderStep>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const simulateTyping = (message: string, delay = 1500) => {
    setIsTyping(true)
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", content: message, timestamp: new Date() }])
      setIsTyping(false)
    }, delay)
  }

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage = {
      role: "user" as const,
      content: input,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Process based on current order step or message content
    const lowerInput = input.toLowerCase()

    if (
      orderStep === "inquiry" ||
      lowerInput.includes("product") ||
      lowerInput.includes("buy") ||
      lowerInput.includes("purchase")
    ) {
      setOrderStep("product")
      simulateTyping(
        "We have several products available. Our bestseller is the Premium T-shirt for ₦5,000. Would you like to order this item? You can also ask for other products we have in stock.",
        1000,
      )
    } else if (
      orderStep === "product" ||
      lowerInput.includes("yes") ||
      lowerInput.includes("order") ||
      lowerInput.includes("buy")
    ) {
      setOrderStep("checkout")
      simulateTyping(
        "Great choice! How many Premium T-shirts would you like to order? We have sizes S, M, L, and XL available.",
        1000,
      )

      // After a delay, proceed to payment
      setTimeout(() => {
        simulateTyping(
          "I've added 1 Premium T-shirt (Size M) to your order. The total is ₦5,000. Would you like to proceed to payment?",
          1000,
        )
      }, 3000)
    } else if (orderStep === "checkout" || lowerInput.includes("pay") || lowerInput.includes("payment")) {
      setOrderStep("confirmation")
      simulateTyping(
        "Perfect! Here's your payment link: https://payment.smartopsai.com/t5k7j9\n\nOnce you complete the payment, I'll confirm your order immediately.",
        1000,
      )

      // Simulate payment confirmation after a delay
      setTimeout(() => {
        simulateTyping(
          "Payment received! Your order #SMT12345 has been confirmed. Your Premium T-shirt will be shipped within 24 hours. You'll receive tracking information once it's dispatched. Thank you for shopping with us!",
          1500,
        )

        // Reset order flow
        setTimeout(() => {
          setOrderStep(null)
        }, 2000)
      }, 5000)
    } else if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey")) {
      simulateTyping(
        "Hello! Welcome to Usman's Store. How can I assist you today? You can ask about our products, place an order, or get support with an existing order.",
        800,
      )
    } else if (lowerInput.includes("help") || lowerInput.includes("support")) {
      simulateTyping(
        "I'm here to help! You can ask me about:\n\n• Our products and pricing\n• Placing an order\n• Checking order status\n• Return policy\n• Store hours and location\n\nWhat would you like to know?",
        1000,
      )
    } else if (lowerInput.includes("hours") || lowerInput.includes("location") || lowerInput.includes("address")) {
      simulateTyping(
        "Our physical store is open Monday to Saturday, 9 AM to 6 PM. We're located at 123 Main Street, Lagos. But you can shop online 24/7 and I'm always here to assist you!",
        1000,
      )
    } else if (lowerInput.includes("return") || lowerInput.includes("refund")) {
      simulateTyping(
        "We offer a 14-day return policy for all unused items in original packaging. To initiate a return, please provide your order number and I'll guide you through the process.",
        1000,
      )
    } else {
      setOrderStep("inquiry")
      simulateTyping(
        "Thanks for your message! I'd be happy to help you with that. Are you interested in browsing our products or do you have a specific item in mind?",
        1000,
      )
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Store Logo" />
              <AvatarFallback>US</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-bold">Usman's Store</h1>
              <p className="text-xs text-gray-500">WhatsApp Business</p>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={() => window.history.back()}>
            Back to Demo
          </Button>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-6 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-2/3 flex flex-col">
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Chat with AI Assistant</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[600px] overflow-y-auto p-4 flex flex-col gap-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    {message.role === "assistant" && (
                      <Avatar className="h-8 w-8 mr-2 mt-1">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI" />
                        <AvatarFallback>AI</AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.role === "user"
                          ? "bg-blue-600 text-white"
                          : message.role === "system"
                            ? "bg-gray-200 text-gray-800 max-w-full"
                            : "bg-white border text-gray-800"
                      }`}
                    >
                      {message.content}
                      <div className={`text-xs mt-1 ${message.role === "user" ? "text-blue-100" : "text-gray-500"}`}>
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </div>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <Avatar className="h-8 w-8 mr-2 mt-1">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI" />
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                    <div className="bg-white border p-3 rounded-lg">
                      <div className="flex gap-1">
                        <div
                          className="w-2 h-2 rounded-full bg-gray-300 animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        ></div>
                        <div
                          className="w-2 h-2 rounded-full bg-gray-300 animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        ></div>
                        <div
                          className="w-2 h-2 rounded-full bg-gray-300 animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              <div className="p-4 border-t flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1"
                />
                <Button onClick={handleSend} disabled={isTyping}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="w-full md:w-1/3">
          <Card>
            <CardHeader>
              <CardTitle>Order Process Demo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div
                    className={`rounded-full p-2 ${orderStep ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-400"}`}
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Product Inquiry</h3>
                    <p className="text-sm text-gray-500">AI answers product questions and makes recommendations</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className={`rounded-full p-2 ${orderStep === "product" || orderStep === "checkout" || orderStep === "confirmation" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-400"}`}
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Order Creation</h3>
                    <p className="text-sm text-gray-500">Customer selects products and quantities</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className={`rounded-full p-2 ${orderStep === "checkout" || orderStep === "confirmation" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-400"}`}
                  >
                    <CreditCard className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Payment Processing</h3>
                    <p className="text-sm text-gray-500">AI generates payment link and processes transaction</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className={`rounded-full p-2 ${orderStep === "confirmation" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-400"}`}
                  >
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Order Confirmation</h3>
                    <p className="text-sm text-gray-500">Order is confirmed and business is notified</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg border">
                <h3 className="font-medium mb-2">Try these prompts:</h3>
                <ul className="text-sm space-y-2">
                  <li
                    className="cursor-pointer hover:text-blue-600"
                    onClick={() => {
                      setInput("Hello, I'm interested in your products")
                      handleSend()
                    }}
                  >
                    "Hello, I'm interested in your products"
                  </li>
                  <li
                    className="cursor-pointer hover:text-blue-600"
                    onClick={() => {
                      setInput("I want to buy a t-shirt")
                      handleSend()
                    }}
                  >
                    "I want to buy a t-shirt"
                  </li>
                  <li
                    className="cursor-pointer hover:text-blue-600"
                    onClick={() => {
                      setInput("What's your return policy?")
                      handleSend()
                    }}
                  >
                    "What's your return policy?"
                  </li>
                  <li
                    className="cursor-pointer hover:text-blue-600"
                    onClick={() => {
                      setInput("What are your store hours?")
                      handleSend()
                    }}
                  >
                    "What are your store hours?"
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
