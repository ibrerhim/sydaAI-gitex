"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { useTheme } from "next-themes"

type Customer = {
  id: string
  name: string
  email: string
  orders: number
  spent: number
  lastOrder: string
}

const customers: Customer[] = [
  {
    id: "CUST-001",
    name: "John Doe",
    email: "john.doe@example.com",
    orders: 5,
    spent: 25000,
    lastOrder: "2025-03-15",
  },
  {
    id: "CUST-002",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    orders: 3,
    spent: 18500,
    lastOrder: "2025-03-10",
  },
  {
    id: "CUST-003",
    name: "Michael Johnson",
    email: "michael.j@example.com",
    orders: 7,
    spent: 42000,
    lastOrder: "2025-03-18",
  },
  {
    id: "CUST-004",
    name: "Sarah Williams",
    email: "sarah.w@example.com",
    orders: 2,
    spent: 9500,
    lastOrder: "2025-02-28",
  },
  {
    id: "CUST-005",
    name: "David Brown",
    email: "david.b@example.com",
    orders: 4,
    spent: 22500,
    lastOrder: "2025-03-05",
  },
]

const channelData = [
  { name: "WhatsApp", value: 65 },
  { name: "Instagram", value: 25 },
  { name: "Web", value: 10 },
]

const COLORS = ["#3b82f6", "#ec4899", "#10b981"]
const DARK_COLORS = ["#60a5fa", "#f472b6", "#34d399"]

export function CustomerInsights({ detailed = false }: { detailed?: boolean }) {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const colors = isDark ? DARK_COLORS : COLORS

  if (detailed) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Customer Insights</CardTitle>
          <CardDescription>Detailed customer information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead>Total Spent</TableHead>
                  <TableHead>Last Order</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell className="font-medium">{customer.id}</TableCell>
                    <TableCell>{customer.name}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.orders}</TableCell>
                    <TableCell>₦{customer.spent.toLocaleString()}</TableCell>
                    <TableCell>{new Date(customer.lastOrder).toLocaleDateString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="col-span-1 h-full">
      <CardHeader>
        <CardTitle>Customer Insights</CardTitle>
        <CardDescription>Sales channels distribution</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] lg:h-[350px] xl:h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={channelData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {channelData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => `${value}%`}
                contentStyle={{
                  backgroundColor: isDark ? "hsl(var(--card))" : "#fff",
                  borderColor: "hsl(var(--border))",
                  color: isDark ? "#fff" : "#000",
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-blue-500 dark:bg-blue-400 mr-2"></div>
              <span className="text-sm">WhatsApp</span>
            </div>
            <span className="text-sm font-medium">65%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-pink-500 dark:bg-pink-400 mr-2"></div>
              <span className="text-sm">Instagram</span>
            </div>
            <span className="text-sm font-medium">25%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-green-500 dark:bg-green-400 mr-2"></div>
              <span className="text-sm">Web</span>
            </div>
            <span className="text-sm font-medium">10%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
