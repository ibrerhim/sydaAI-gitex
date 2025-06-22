"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function OnboardingPage() {
  const [step, setStep] = useState(1)
  const totalSteps = 4

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">Syda</span> AI
          </div>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm">
                Skip for now
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container grid gap-6 px-4 md:px-6 max-w-4xl mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold tracking-tight">Set up your business</h1>
            <div className="text-sm text-muted-foreground">
              Step {step} of {totalSteps}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <div key={index} className={`h-2 w-16 rounded-full ${index + 1 <= step ? "bg-primary" : "bg-muted"}`} />
              ))}
            </div>
          </div>

          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Business Information</CardTitle>
                <CardDescription>Tell us about your business so we can personalize your experience.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input id="businessName" placeholder="Enter your business name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessType">Business Type</Label>
                  <Tabs defaultValue="retail">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="retail">Retail</TabsTrigger>
                      <TabsTrigger value="service">Service</TabsTrigger>
                      <TabsTrigger value="food">Food & Beverage</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessDescription">Business Description</Label>
                  <Input id="businessDescription" placeholder="Briefly describe your business" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter phone number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" placeholder="Enter email address" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Connect Your Channels</CardTitle>
                <CardDescription>
                  Connect your WhatsApp and Instagram accounts to start automating customer interactions.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                        W
                      </div>
                      <div>
                        <h3 className="font-medium">WhatsApp Business</h3>
                        <p className="text-sm text-muted-foreground">Connect your WhatsApp Business account</p>
                      </div>
                    </div>
                    <Button>Connect</Button>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center text-white font-bold">
                        I
                      </div>
                      <div>
                        <h3 className="font-medium">Instagram</h3>
                        <p className="text-sm text-muted-foreground">Connect your Instagram business account</p>
                      </div>
                    </div>
                    <Button>Connect</Button>
                  </div>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  You can always connect these accounts later from your dashboard settings.
                </div>
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Payment Setup</CardTitle>
                <CardDescription>Set up your payment details to receive payments from customers.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="accountName">Account Name</Label>
                  <Input id="accountName" placeholder="Enter account name" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="accountNumber">Account Number</Label>
                    <Input id="accountNumber" placeholder="Enter account number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bankName">Bank Name</Label>
                    <Input id="bankName" placeholder="Enter bank name" />
                  </div>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <div className="flex items-start space-x-4">
                    <div className="mt-0.5">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Virtual Account</h3>
                      <p className="text-sm text-muted-foreground">
                        A virtual bank account will be created for your business to handle transactions seamlessly.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 4 && (
            <Card>
              <CardHeader>
                <CardTitle>AI Assistant Configuration</CardTitle>
                <CardDescription>Customize how your AI assistant interacts with customers.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="assistantName">Assistant Name</Label>
                  <Input
                    id="assistantName"
                    placeholder="Enter a name for your AI assistant"
                    defaultValue="Smart Assistant"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="welcomeMessage">Welcome Message</Label>
                  <Input
                    id="welcomeMessage"
                    placeholder="Enter welcome message"
                    defaultValue="Hello! Welcome to our store. How can I help you today?"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessHours">Business Hours</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <Input id="openTime" type="time" defaultValue="09:00" />
                    <Input id="closeTime" type="time" defaultValue="18:00" />
                  </div>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <div className="flex items-start space-x-4">
                    <div className="mt-0.5">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">AI Learning</h3>
                      <p className="text-sm text-muted-foreground">
                        Your AI assistant will learn from customer interactions to improve over time. You can review and
                        adjust its responses in the dashboard.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="flex justify-between">
            {step > 1 ? (
              <Button variant="outline" onClick={prevStep}>
                Back
              </Button>
            ) : (
              <div></div>
            )}
            {step < totalSteps ? (
              <Button onClick={nextStep}>
                Continue <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            ) : (
              <Link href="/dashboard">
                <Button>
                  Complete Setup <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
