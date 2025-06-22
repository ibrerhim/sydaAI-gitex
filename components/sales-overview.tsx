"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { useTheme } from "next-themes"

const data = [
  { name: "Jan", sales: 400000 },
  { name: "Feb", sales: 300000 },
  { name: "Mar", sales: 500000 },
  { name: "Apr", sales: 450000 },
  { name: "May", sales: 470000 },
  { name: "Jun", sales: 600000 },
  { name: "Jul", sales: 650000 },
]

export function SalesOverview() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Card className="col-span-1 h-full">
      <CardHeader>
        <CardTitle>Sales Overview</CardTitle>
        <CardDescription>Monthly sales performance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] lg:h-[350px] xl:h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? "#374151" : "#e5e7eb"} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} stroke={isDark ? "#9ca3af" : "#6b7280"} />
              <YAxis
                tickFormatter={(value) => `₦${value / 1000}k`}
                tickLine={false}
                axisLine={false}
                stroke={isDark ? "#9ca3af" : "#6b7280"}
              />
              <Tooltip
                formatter={(value) => [`₦${value.toLocaleString()}`, "Sales"]}
                labelFormatter={(label) => `Month: ${label}`}
                contentStyle={{
                  backgroundColor: isDark ? "hsl(var(--card))" : "#fff",
                  borderColor: "hsl(var(--border))",
                  color: isDark ? "#fff" : "#000",
                }}
              />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={{ r: 4, fill: "hsl(var(--primary))" }}
                activeDot={{ r: 6, fill: "hsl(var(--primary))" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
