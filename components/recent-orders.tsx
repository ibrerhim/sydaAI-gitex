"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const orders = [
  {
    id: "ORD-1234",
    customer: "John Smith",
    product: "Pro Plan",
    status: "completed",
    date: "2023-01-15",
    amount: "$59.00",
  },
  {
    id: "ORD-2345",
    customer: "Sarah Johnson",
    product: "Team Plan",
    status: "processing",
    date: "2023-01-14",
    amount: "$99.00",
  },
  {
    id: "ORD-3456",
    customer: "Michael Brown",
    product: "Basic Plan",
    status: "completed",
    date: "2023-01-13",
    amount: "$29.00",
  },
  {
    id: "ORD-4567",
    customer: "Emily Davis",
    product: "Pro Plan",
    status: "failed",
    date: "2023-01-12",
    amount: "$59.00",
  },
  {
    id: "ORD-5678",
    customer: "Robert Wilson",
    product: "Enterprise Plan",
    status: "completed",
    date: "2023-01-11",
    amount: "$299.00",
  },
]

interface RecentOrdersProps {
  className?: string
}

export function RecentOrders({ className }: RecentOrdersProps) {
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
        <CardTitle className="text-base sm:text-lg">Recent Orders</CardTitle>
        <CardDescription>Latest customer orders</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left font-medium p-2 pl-0">Order</th>
                {!isSmallScreen && <th className="text-left font-medium p-2">Customer</th>}
                <th className="text-left font-medium p-2">Status</th>
                {!isSmallScreen && <th className="text-left font-medium p-2">Date</th>}
                <th className="text-right font-medium p-2 pr-0">Amount</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b last:border-0">
                  <td className="p-2 pl-0">
                    <div className="font-medium">{order.id}</div>
                    {isSmallScreen && <div className="text-xs text-muted-foreground mt-1">{order.customer}</div>}
                  </td>
                  {!isSmallScreen && <td className="p-2">{order.customer}</td>}
                  <td className="p-2">
                    <Badge
                      variant="outline"
                      className={cn(
                        "text-xs",
                        order.status === "completed" && "border-green-500 text-green-500",
                        order.status === "processing" && "border-blue-500 text-blue-500",
                        order.status === "failed" && "border-red-500 text-red-500",
                      )}
                    >
                      {order.status}
                    </Badge>
                    {isSmallScreen && <div className="text-xs text-muted-foreground mt-1">{order.date}</div>}
                  </td>
                  {!isSmallScreen && <td className="p-2">{order.date}</td>}
                  <td className="p-2 pr-0 text-right">{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
