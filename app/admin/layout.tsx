import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <Link href="/admin" className="font-bold text-xl">
            Syda Admin
          </Link>
          <nav className="ml-auto flex gap-4">
            <Button variant="ghost" asChild>
              <Link href="/admin/waitlist">Waitlist</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/">Back to Site</Link>
            </Button>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}
