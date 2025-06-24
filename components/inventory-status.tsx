"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const inventory = [
  {
    name: "Product A",
    stock: 80,
    total: 100,
  },
  {
    name: "Product B",
    stock: 25,
    total: 100,
  },
  {
    name: "Product C",
    stock: 65,
    total: 100,
  },
  {
    name: "Product D",
    stock: 10,
    total: 100,
  },
  {
    name: "Product E",
    stock: 50,
    total: 100,
  },
]

interface InventoryStatusProps {
  className?: string
}

export function InventoryStatus({ className }: InventoryStatusProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-base sm:text-lg">Inventory Status</CardTitle>
        <CardDescription>Current stock levels</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {inventory.map((item) => (
            <div key={item.name} className="grid gap-2">
              <div className="flex items-center justify-between text-sm">
                <div className="font-medium">{item.name}</div>
                <div className="text-muted-foreground">
                  {item.stock} / {item.total}
                </div>
              </div>
              <Progress
                value={(item.stock / item.total) * 100}
                className={`h-2 ${
                  item.stock < 30
                    ? "bg-red-100 [&>div]:bg-red-500"
                    : item.stock < 60
                      ? "bg-yellow-100 [&>div]:bg-yellow-500"
                      : "bg-green-100 [&>div]:bg-green-500"
                }`}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
