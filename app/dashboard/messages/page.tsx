"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Send } from "lucide-react"

type Message = {
  id: number
  sender: string
  content: string
  timestamp: string
  isUser: boolean
}

type Conversation = {
  id: number
  name: string
  lastMessage: string
  timestamp: string
  unread: number
  channel: "whatsapp" | "instagram"
  avatar: string
  messages: Message[]
}

export default function MessagesPage() {
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: 1,
      name: "John Doe",
      lastMessage: "I'd like to order the Premium T-shirt in blue, size L",
      timestamp: "10:25 AM",
      unread: 2,
      channel: "whatsapp",
      avatar: "/placeholder.svg?height=40&width=40&text=JD",
      messages: [
        {
          id: 1,
          sender: "John Doe",
          content: "Hello, do you have the Premium T-shirt in blue?",
          timestamp: "10:20 AM",
          isUser: false,
        },
        {
          id: 2,
          sender: "AI Assistant",
          content:
            "Yes, we have the Premium T-shirt in blue in sizes S, M, L, and XL. Would you like to place an order?",
          timestamp: "10:22 AM",
          isUser: true,
        },
        {
          id: 3,
          sender: "John Doe",
          content: "Great! I'd like to order one in size L. How much is it?",
          timestamp: "10:24 AM",
          isUser: false,
        },
        {
          id: 4,
          sender: "John Doe",
          content: "I'd like to order the Premium T-shirt in blue, size L",
          timestamp: "10:25 AM",
          isUser: false,
        },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      lastMessage: "Thanks for the quick delivery!",
      timestamp: "Yesterday",
      unread: 0,
      channel: "instagram",
      avatar: "/placeholder.svg?height=40&width=40&text=JS",
      messages: [
        {
          id: 1,
          sender: "Jane Smith",
          content: "Hi, I received my order today.",
          timestamp: "Yesterday",
          isUser: false,
        },
        {
          id: 2,
          sender: "AI Assistant",
          content: "That's great! We hope you're happy with your purchase.",
          timestamp: "Yesterday",
          isUser: true,
        },
        {
          id: 3,
          sender: "Jane Smith",
          content: "Thanks for the quick delivery!",
          timestamp: "Yesterday",
          isUser: false,
        },
      ],
    },
    {
      id: 3,
      name: "Michael Johnson",
      lastMessage: "Do you offer international shipping?",
      timestamp: "Yesterday",
      unread: 1,
      channel: "whatsapp",
      avatar: "/placeholder.svg?height=40&width=40&text=MJ",
      messages: [
        {
          id: 1,
          sender: "Michael Johnson",
          content: "Do you offer international shipping?",
          timestamp: "Yesterday",
          isUser: false,
        },
      ],
    },
    {
      id: 4,
      name: "Sarah Williams",
      lastMessage: "I'd like to return my order",
      timestamp: "2 days ago",
      unread: 0,
      channel: "instagram",
      avatar: "/placeholder.svg?height=40&width=40&text=SW",
      messages: [
        {
          id: 1,
          sender: "Sarah Williams",
          content: "I'd like to return my order",
          timestamp: "2 days ago",
          isUser: false,
        },
      ],
    },
  ])

  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(conversations[0])
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedConversation) return

    const updatedConversations = conversations.map((conv) => {
      if (conv.id === selectedConversation.id) {
        const newMsg: Message = {
          id: conv.messages.length + 1,
          sender: "AI Assistant",
          content: newMessage,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          isUser: true,
        }

        return {
          ...conv,
          lastMessage: newMessage,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          messages: [...conv.messages, newMsg],
        }
      }
      return conv
    })

    setConversations(updatedConversations)
    setSelectedConversation(updatedConversations.find((c) => c.id === selectedConversation.id) || null)
    setNewMessage("")
  }

  const handleSelectConversation = (conversation: Conversation) => {
    // Mark as read
    const updatedConversations = conversations.map((conv) => {
      if (conv.id === conversation.id) {
        return {
          ...conv,
          unread: 0,
        }
      }
      return conv
    })

    setConversations(updatedConversations)
    setSelectedConversation(conversation)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
          <p className="text-muted-foreground">Manage your customer conversations</p>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden rounded-lg border">
        {/* Conversation List */}
        <div className="w-full md:w-1/3 border-r">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search conversations..." className="pl-8" />
            </div>
          </div>
          <div className="overflow-y-auto h-[calc(100vh-16rem)]">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-muted/50 ${
                  selectedConversation?.id === conversation.id ? "bg-muted" : ""
                }`}
                onClick={() => handleSelectConversation(conversation)}
              >
                <Avatar>
                  <AvatarImage src={conversation.avatar} />
                  <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{conversation.name}</div>
                    <div className="text-xs text-muted-foreground">{conversation.timestamp}</div>
                  </div>
                  <div className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <Badge variant="outline" className="border-0 bg-gray-100 text-gray-800 text-xs">
                    {conversation.channel === "whatsapp" ? "WhatsApp" : "Instagram"}
                  </Badge>
                  {conversation.unread > 0 && (
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                      {conversation.unread}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        {selectedConversation ? (
          <div className="hidden md:flex md:flex-1 flex-col">
            <div className="flex items-center gap-3 p-4 border-b">
              <Avatar>
                <AvatarImage src={selectedConversation.avatar} />
                <AvatarFallback>{selectedConversation.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{selectedConversation.name}</div>
                <div className="text-xs text-muted-foreground flex items-center gap-2">
                  <Badge variant="outline" className="border-0 bg-gray-100 text-gray-800 text-xs">
                    {selectedConversation.channel === "whatsapp" ? "WhatsApp" : "Instagram"}
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {selectedConversation.messages.map((message) => (
                <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                  {!message.isUser && (
                    <Avatar className="h-8 w-8 mr-2 mt-1">
                      <AvatarImage src={selectedConversation.avatar} />
                      <AvatarFallback>{selectedConversation.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isUser ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    {message.content}
                    <div
                      className={`text-xs mt-1 ${message.isUser ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                    >
                      {message.timestamp}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="hidden md:flex md:flex-1 items-center justify-center">
            <div className="text-center">
              <h3 className="text-lg font-medium">Select a conversation</h3>
              <p className="text-muted-foreground">Choose a conversation from the list to start chatting</p>
            </div>
          </div>
        )}

        {/* Mobile View - Show selected conversation */}
        {selectedConversation && (
          <div className="md:hidden w-full">
            <div className="flex items-center gap-3 p-4 border-b">
              <Button variant="ghost" size="sm" onClick={() => setSelectedConversation(null)} className="mr-2">
                Back
              </Button>
              <Avatar>
                <AvatarImage src={selectedConversation.avatar} />
                <AvatarFallback>{selectedConversation.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{selectedConversation.name}</div>
                <div className="text-xs text-muted-foreground">
                  <Badge variant="outline" className="border-0 bg-gray-100 text-gray-800 text-xs">
                    {selectedConversation.channel === "whatsapp" ? "WhatsApp" : "Instagram"}
                  </Badge>
                </div>
              </div>
            </div>
            <div className="h-[calc(100vh-24rem)] overflow-y-auto p-4 space-y-4">
              {selectedConversation.messages.map((message) => (
                <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                  {!message.isUser && (
                    <Avatar className="h-8 w-8 mr-2 mt-1">
                      <AvatarImage src={selectedConversation.avatar} />
                      <AvatarFallback>{selectedConversation.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isUser ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    {message.content}
                    <div
                      className={`text-xs mt-1 ${message.isUser ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                    >
                      {message.timestamp}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
