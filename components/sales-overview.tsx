"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
]

interface SalesOverviewProps {
  className?: string
}

export function SalesOverview({ className }: SalesOverviewProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [chartHeight, setChartHeight] = useState(350)
  const [chartMargin, setChartMargin] = useState({
    top: 20,
    right: 30,
    left: 20,
    bottom: 20,
  })

  useEffect(() => {
    setIsMounted(true)

    const handleResize = () => {
      if (window.innerWidth < 640) {
        setChartHeight(250)
        setChartMargin({ top: 15, right: 10, left: 0, bottom: 15 })
      } else {
        setChartHeight(350)
        setChartMargin({ top: 20, right: 30, left: 20, bottom: 20 })
      }
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
        <CardTitle className="text-base sm:text-lg">Sales Overview</CardTitle>
        <CardDescription>Monthly sales performance</CardDescription>
      </CardHeader>
      <CardContent>
        {isMounted ? (
          <ResponsiveContainer width="100%" height={chartHeight}>
            <BarChart data={data} margin={chartMargin}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={12} tickMargin={8} />
              <YAxis
                tickLine={false}
                axisLine={false}
                fontSize={12}
                tickFormatter={(value) => `$${value}`}
                width={window.innerWidth < 640 ? 30 : 40}
              />
              <Tooltip
                formatter={(value) => [`$${value}`, "Revenue"]}
                labelStyle={{ fontSize: 12 }}
                contentStyle={{ fontSize: 12 }}
              />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Bar dataKey="total" name="Revenue" fill="#6366f1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex items-center justify-center h-[350px]">
            <div className="w-full h-full bg-muted/20 animate-pulse rounded-md"></div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
