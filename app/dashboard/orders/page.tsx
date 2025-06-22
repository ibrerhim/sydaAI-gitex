import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Filter, Download } from "lucide-react"

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
          <p className="text-muted-foreground">Manage and track your customer orders</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-9">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <TabsList>
            <TabsTrigger value="all">All Orders</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="processing">Processing</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search orders..." className="w-full sm:w-[200px] pl-8" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-[180px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Filter by date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All time</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="yesterday">Yesterday</SelectItem>
                <SelectItem value="week">This week</SelectItem>
                <SelectItem value="month">This month</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Products</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Channel</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "ORD-001",
                        customer: "John Doe",
                        products: "Premium T-shirt (L)",
                        date: "2025-03-18",
                        amount: "₦5,000",
                        status: "completed",
                        channel: "WhatsApp",
                      },
                      {
                        id: "ORD-002",
                        customer: "Jane Smith",
                        products: "Casual Jeans (M)",
                        date: "2025-03-17",
                        amount: "₦8,500",
                        status: "processing",
                        channel: "Instagram",
                      },
                      {
                        id: "ORD-003",
                        customer: "Michael Johnson",
                        products: "Sneakers (Size 42)",
                        date: "2025-03-16",
                        amount: "₦12,000",
                        status: "pending",
                        channel: "WhatsApp",
                      },
                      {
                        id: "ORD-004",
                        customer: "Sarah Williams",
                        products: "Hoodie (XL)",
                        date: "2025-03-15",
                        amount: "₦7,500",
                        status: "completed",
                        channel: "WhatsApp",
                      },
                      {
                        id: "ORD-005",
                        customer: "David Brown",
                        products: "Cap",
                        date: "2025-03-14",
                        amount: "₦2,500",
                        status: "cancelled",
                        channel: "Instagram",
                      },
                      {
                        id: "ORD-006",
                        customer: "Emily Davis",
                        products: "Sunglasses",
                        date: "2025-03-13",
                        amount: "₦4,500",
                        status: "completed",
                        channel: "WhatsApp",
                      },
                      {
                        id: "ORD-007",
                        customer: "Robert Wilson",
                        products: "Watch",
                        date: "2025-03-12",
                        amount: "₦15,000",
                        status: "processing",
                        channel: "Instagram",
                      },
                      {
                        id: "ORD-008",
                        customer: "Jennifer Taylor",
                        products: "Backpack",
                        date: "2025-03-11",
                        amount: "₦9,000",
                        status: "completed",
                        channel: "WhatsApp",
                      },
                    ].map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.products}</TableCell>
                        <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
                        <TableCell>{order.amount}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={`border-0 ${
                              order.status === "completed"
                                ? "bg-green-100 text-green-800"
                                : order.status === "processing"
                                  ? "bg-blue-100 text-blue-800"
                                  : order.status === "pending"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-red-100 text-red-800"
                            }`}
                          >
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="border-0 bg-gray-100 text-gray-800">
                            {order.channel}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Link href={`/dashboard/orders/${order.id}`}>
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Showing <strong>1-8</strong> of <strong>24</strong> orders
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pending Orders</CardTitle>
              <CardDescription>Orders awaiting payment or confirmation</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Pending orders content will appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="processing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Processing Orders</CardTitle>
              <CardDescription>Orders being prepared for shipping</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Processing orders content will appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="completed" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Completed Orders</CardTitle>
              <CardDescription>Successfully delivered orders</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Completed orders content will appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="cancelled" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Cancelled Orders</CardTitle>
              <CardDescription>Orders that were cancelled</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Cancelled orders content will appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
