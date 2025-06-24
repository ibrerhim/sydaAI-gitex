"use client"

import { useState } from "react"
import Link from "next/link"
import { Bell, Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DashboardMobileNav } from "@/components/dashboard-mobile-nav"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function DashboardHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b bg-background">
      <div className="flex h-14 sm:h-16 items-center px-2 xs:px-3 sm:px-4 md:px-6 max-w-[1920px] mx-auto">
        <div className="flex items-center md:hidden mr-1 sm:mr-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden h-8 w-8">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-[280px] sm:w-[350px]">
              <DashboardMobileNav />
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex items-center md:hidden">
          <Link href="/dashboard" className="flex items-center gap-1 sm:gap-2 font-bold">
            <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs sm:text-base">
              S
            </div>
            <span className="text-sm sm:text-base">Smart-ops AI</span>
          </Link>
        </div>

        <div className="hidden md:flex md:items-center md:gap-2">
          <SidebarTrigger />
        </div>

        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          {isSearchOpen ? (
            <div className="relative w-full max-w-[140px] xs:max-w-[180px] sm:max-w-md">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full pl-6 sm:pl-8 h-7 sm:h-9 text-xs sm:text-sm focus-visible:ring-primary"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
            </div>
          ) : (
            <Button variant="ghost" size="icon" className="hidden md:flex" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative h-8 w-8">
                <Bell className="h-4 w-4" />
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[8px] font-medium text-primary-foreground">
                  3
                </span>
                <span className="sr-only">Notifications</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[280px] sm:w-[350px]">
              <DropdownMenuLabel className="text-xs sm:text-sm">Notifications</DropdownMenuLabel>
              <DropdownMenuItem className="flex items-start gap-3 sm:gap-4 py-2 sm:py-3 text-xs sm:text-sm">
                <span className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 flex-shrink-0">
                  <Bell className="h-3 w-3 sm:h-4 sm:w-4" />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-medium">New order received</p>
                  <p className="text-muted-foreground truncate text-[10px] sm:text-xs">Order #12345 - ₦15,000</p>
                </div>
                <p className="text-muted-foreground whitespace-nowrap text-[10px] sm:text-xs">5m ago</p>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-start gap-3 sm:gap-4 py-2 sm:py-3 text-xs sm:text-sm">
                <span className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300 flex-shrink-0">
                  <Bell className="h-3 w-3 sm:h-4 sm:w-4" />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-medium">Payment successful</p>
                  <p className="text-muted-foreground truncate text-[10px] sm:text-xs">Order #12344 - ₦8,500</p>
                </div>
                <p className="text-muted-foreground whitespace-nowrap text-[10px] sm:text-xs">1h ago</p>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-start gap-3 sm:gap-4 py-2 sm:py-3 text-xs sm:text-sm">
                <span className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300 flex-shrink-0">
                  <Bell className="h-3 w-3 sm:h-4 sm:w-4" />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-medium">Low stock alert</p>
                  <p className="text-muted-foreground truncate text-[10px] sm:text-xs">Premium T-shirt - 3 left</p>
                </div>
                <p className="text-muted-foreground whitespace-nowrap text-[10px] sm:text-xs">2h ago</p>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="justify-center text-xs sm:text-sm font-medium text-primary">
                View all notifications
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                <Avatar className="h-6 w-6 sm:h-8 sm:w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback className="text-xs sm:text-sm">US</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[180px] sm:w-[200px]">
              <DropdownMenuLabel className="text-xs sm:text-sm">My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="text-xs sm:text-sm">
                <Link href="/dashboard/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="text-xs sm:text-sm">
                <Link href="/dashboard/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="text-xs sm:text-sm">
                <Link href="/dashboard/billing">Billing</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="text-xs sm:text-sm">
                <Link href="/">Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
