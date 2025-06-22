import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

type Order = {
  id: string
  customer: string
  product: string
  date: string
  amount: number
  status: "pending" | "processing" | "completed" | "cancelled"
}

const orders: Order[] = [
  {
    id: "ORD-001",
    customer: "John Doe",
    product: "Premium T-shirt (L)",
    date: "2025-03-18",
    amount: 5000,
    status: "completed",
  },
  {
    id: "ORD-002",
    customer: "Jane Smith",
    product: "Casual Jeans (M)",
    date: "2025-03-17",
    amount: 8500,
    status: "processing",
  },
  {
    id: "ORD-003",
    customer: "Michael Johnson",
    product: "Sneakers (Size 42)",
    date: "2025-03-16",
    amount: 12000,
    status: "pending",
  },
  {
    id: "ORD-004",
    customer: "Sarah Williams",
    product: "Hoodie (XL)",
    date: "2025-03-15",
    amount: 7500,
    status: "completed",
  },
  {
    id: "ORD-005",
    customer: "David Brown",
    product: "Cap",
    date: "2025-03-14",
    amount: 2500,
    status: "cancelled",
  },
]

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  processing: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  completed: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  cancelled: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
}

export function RecentOrders({ showAll = false }: { showAll?: boolean }) {
  const displayOrders = showAll ? orders : orders.slice(0, 4)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Orders</CardTitle>
          <CardDescription>{showAll ? "All orders" : "Latest customer orders"}</CardDescription>
        </div>
        {!showAll && (
          <Button variant="outline" size="sm" asChild>
            <Link href="/dashboard/orders">View All</Link>
          </Button>
        )}
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {displayOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.product}</TableCell>
                  <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
                  <TableCell>₦{order.amount.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={`${statusColors[order.status]} border-0`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/dashboard/orders/${order.id}`}>View</Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
