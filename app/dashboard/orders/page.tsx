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
          <Button variant="outline" size="sm" className="h-9 w-full sm:w-auto">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <div className="overflow-x-auto pb-2">
          <TabsList className="w-full sm:w-auto inline-flex">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="processing">Processing</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search orders..." className="w-full pl-8" />
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
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <div className="inline-block min-w-full align-middle">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">Order ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead className="hidden sm:table-cell">Products</TableHead>
                        <TableHead className="hidden md:table-cell">Date</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="hidden lg:table-cell">Channel</TableHead>
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
                          <TableCell className="max-w-[120px] truncate">{order.customer}</TableCell>
                          <TableCell className="hidden sm:table-cell max-w-[150px] truncate">
                            {order.products}
                          </TableCell>
                          <TableCell className="hidden md:table-cell whitespace-nowrap">
                            {new Date(order.date).toLocaleDateString()}
                          </TableCell>
                          <TableCell>{order.amount}</TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={`border-0 whitespace-nowrap ${
                                order.status === "completed"
                                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                  : order.status === "processing"
                                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                    : order.status === "pending"
                                      ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                                      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                              }`}
                            >
                              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden lg:table-cell">
                            <Badge
                              variant="outline"
                              className="border-0 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                            >
                              {order.channel}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Link href={`/dashboard/orders/${order.id}`}>
                              <Button variant="ghost" size="sm" className="h-8 px-2">
                                View
                              </Button>
                            </Link>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              Showing <strong>1-8</strong> of <strong>24</strong> orders
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled className="w-full sm:w-auto">
                Previous
              </Button>
              <Button variant="outline" size="sm" className="w-full sm:w-auto">
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
