"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface ResponsiveDashboardLayoutProps {
  children: React.ReactNode
  className?: string
}

export function ResponsiveDashboardLayout({ children, className }: ResponsiveDashboardLayoutProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640)
    }

    // Initial check
    checkScreenSize()

    // Add event listener
    window.addEventListener("resize", checkScreenSize)

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  if (!isMounted) {
    return <div className={cn("grid gap-4", className)}>{children}</div>
  }

  return <div className={cn("grid gap-4", isSmallScreen ? "grid-cols-1" : "", className)}>{children}</div>
}
