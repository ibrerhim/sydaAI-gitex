"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Bot, CheckCircle, MessageSquare, ShoppingCart, Wallet, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WaitlistModal } from "@/components/waitlist-modal"

export default function Home() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950">
      <header className="flex items-center justify-between bg-slate-950/90 dark:bg-slate-900/90 backdrop-blur-md py-5 px-6 sticky top-0 z-50 border-b border-white/10">
        <div className="flex items-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full blur-sm opacity-70 animate-pulse"></div>
            <Bot className="w-8 h-8 text-white relative" />
          </div>
          <h1 className="text-2xl font-bold text-white ml-3 tracking-tight">Smart-ops AI</h1>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-white/80 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="text-white/80 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="text-white/80 hover:text-white transition-colors">
            About
          </Link>
          <Button
            asChild
            variant="outline"
            className="border-white/20 text-white bg-blue-900 hover:bg-white/10 rounded-full"
          >
            <Link href="/login">Log In</Link>
          </Button>
        </div>
      </header>
      <div>
        {/* Hero Section */}
        <header className="relative bg-black text-white overflow-hidden">
          <div className="absolute mx-5 inset-0 z-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
          </div>
          <div className="container px-4 py-24 flex flex-col lg:flex-row items-center text-center lg:text-left relative z-10">
            <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6">
                <Zap className="h-4 w-4 mr-2 text-yellow-300" />
                Next-Gen Business Automation
              </div>
              <h1 className="text-4xl md:text-7xl font-bold mb-6">
                Transforming MSMEs With
                <span className="bg-gradient-to-r from-blue-700 to-blue-200 bg-clip-text text-transparent">
                  {" "}
                  Agentic AI
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl text-blue-50">
                Smart-Ops is an agentic AI assistant designed to help SMEs across Africa sell easily on social media platforms they already use. by simplifying and automating customer interactions ,order management and payment processing , all without needing any tech skills or expensive setups.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  <Link href="/dashboard">Try Demo Dashboard</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-blue-900/30 backdrop-blur-sm text-white hover:bg-white/10 rounded-full"
                  onClick={() => setIsWaitlistModalOpen(true)}
                >
                  Join the Waitlist
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-lg animate-pulse"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-pink-500 rounded-full opacity-20 blur-lg animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-xl backdrop-blur-sm"></div>
                <img
                  src="https://res.cloudinary.com/doyjag1gz/image/upload/v1745570421/smtttopsss_n4qmzl.png"
                  alt="Smart-ops AI Dashboard"
                  className="rounded-xl shadow-2xl border border-white/20 relative z-10 w-full transform hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent"></div>
        </header>

        {/* How It Works */}
        <section className="py-24 bg-slate-50 dark:bg-slate-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent inline-block">
                How It Works
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-slate-200/50 dark:border-slate-800/50 group">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <MessageSquare className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Connect & Configure
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Connect your WhatsApp or Instagram accounts through a simple onboarding process. Upload your products
                  and business details.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-slate-200/50 dark:border-slate-800/50 group">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <ShoppingCart className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  AI Handles Sales
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  The AI assistant answers inquiries, takes orders via WhatsApp, and processes payments automatically.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-slate-200/50 dark:border-slate-800/50 group">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Wallet className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Track & Manage
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Get real-time notifications for orders and payments. Manage inventory and view analytics from your
                  dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 dark:bg-slate-900 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent inline-block">
                Key Features
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
              <div className="flex gap-4 group">
                <div className="flex-shrink-0 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl mt-1 group-hover:bg-blue-600 transition-colors">
                  <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    24/7 Customer Service
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    AI assistant answers customer inquiries instantly, any time of day.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="flex-shrink-0 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl mt-1 group-hover:bg-blue-600 transition-colors">
                  <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Automated Order Processing
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Take orders directly through WhatsApp and Instagram without manual intervention.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="flex-shrink-0 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl mt-1 group-hover:bg-blue-600 transition-colors">
                  <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Integrated Payments
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Generate payment links automatically and process transactions seamlessly.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="flex-shrink-0 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl mt-1 group-hover:bg-blue-600 transition-colors">
                  <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Inventory Management
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Automatically adjust stock levels after each sale and get low stock notifications.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="flex-shrink-0 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl mt-1 group-hover:bg-blue-600 transition-colors">
                  <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Real-time Analytics
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Track sales, customer engagement, and business performance in real-time.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="flex-shrink-0 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl mt-1 group-hover:bg-blue-600 transition-colors">
                  <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    No Technical Expertise Required
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Plug-and-play solution designed for SMEs with no technical background.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-500 to-teal-500 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your business?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-blue-50">
              Join thousands of SMEs using Smart-ops AI to automate customer interactions and boost sales.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 rounded-full shadow-lg hover:shadow-xl transition-all px-8"
            >
              <Link href="/dashboard">
                Explore the Dashboard Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-slate-900"></div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
              <div className="mb-8 md:mb-0">
                <div className="flex items-center mb-3">
                  <div className="relative mr-3">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full blur-sm opacity-70"></div>
                    <Bot className="w-6 h-6 text-white relative" />
                  </div>
                  <h2 className="text-2xl font-bold">Smart-ops AI</h2>
                </div>
                <p className="text-slate-400">Redefining efficiency with intelligent solutions</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-4">
                <div>
                  <h3 className="font-semibold mb-3 text-white/80">Company</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="/careers" className="text-slate-400 hover:text-white transition-colors">
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="text-slate-400 hover:text-white transition-colors">
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-white/80">Product</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/features" className="text-slate-400 hover:text-white transition-colors">
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link href="/pricing" className="text-slate-400 hover:text-white transition-colors">
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link href="/roadmap" className="text-slate-400 hover:text-white transition-colors">
                        Roadmap
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-white/80">Connect</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link href="/support" className="text-slate-400 hover:text-white transition-colors">
                        Support
                      </Link>
                    </li>
                    <li>
                      <Link href="/twitter" className="text-slate-400 hover:text-white transition-colors">
                        Twitter
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
              <p>© 2025 Smart-ops AI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Waitlist Modal */}
      <WaitlistModal open={isWaitlistModalOpen} onOpenChange={setIsWaitlistModalOpen} />
    </div>
  )
}
