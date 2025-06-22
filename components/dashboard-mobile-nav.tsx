"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart, ShoppingCart, Package, Users, MessageSquare, Settings, HelpCircle, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DashboardMobileNav() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: BarChart },
    { href: "/dashboard/orders", label: "Orders", icon: ShoppingCart },
    { href: "/dashboard/products", label: "Products", icon: Package },
    { href: "/dashboard/customers", label: "Customers", icon: Users },
    { href: "/dashboard/messages", label: "Messages", icon: MessageSquare },
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
    { href: "/dashboard/help", label: "Help & Support", icon: HelpCircle },
  ]

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="p-4 border-b">
        <Link href="/dashboard" className="flex items-center gap-2 font-bold">
          <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">S</div>
          <span>Smart-ops AI</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button variant={isActive(item.href) ? "secondary" : "ghost"} className="w-full justify-start">
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>
      </div>
      <div className="p-4 border-t">
        <Link href="/">
          <Button variant="ghost" className="w-full justify-start">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </Link>
      </div>
    </div>
  )
}
