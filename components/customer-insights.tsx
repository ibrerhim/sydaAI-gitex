"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from "recharts"

const data = [
  { name: "New", value: 540 },
  { name: "Returning", value: 620 },
  { name: "Inactive", value: 210 },
]

const COLORS = ["#6366f1", "#22c55e", "#f59e0b"]

interface CustomerInsightsProps {
  className?: string
}

export function CustomerInsights({ className }: CustomerInsightsProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [chartSize, setChartSize] = useState({
    height: 350,
    outerRadius: 80,
    innerRadius: 50,
  })

  useEffect(() => {
    setIsMounted(true)

    const handleResize = () => {
      if (window.innerWidth < 640) {
        setChartSize({
          height: 250,
          outerRadius: 60,
          innerRadius: 40,
        })
      } else {
        setChartSize({
          height: 350,
          outerRadius: 80,
          innerRadius: 50,
        })
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const RADIAN = Math.PI / 180
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central" fontSize={12}>
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-base sm:text-lg">Customer Insights</CardTitle>
        <CardDescription>Customer segmentation analysis</CardDescription>
      </CardHeader>
      <CardContent>
        {isMounted ? (
          <ResponsiveContainer width="100%" height={chartSize.height}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={chartSize.outerRadius}
                innerRadius={chartSize.innerRadius}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value}`, "Customers"]} />
              <Legend
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
                wrapperStyle={{ fontSize: 12, paddingTop: 20 }}
              />
            </PieChart>
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
