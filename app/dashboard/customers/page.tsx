import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, Download, UserPlus } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Customers</h1>
          <p className="text-muted-foreground">Manage your customer database</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" className="w-full sm:w-auto">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button size="sm" className="w-full sm:w-auto">
            <UserPlus className="mr-2 h-4 w-4" />
            Add Customer
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search customers..." className="w-full pl-8" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-full sm:w-[180px]">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Customers</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
            <SelectItem value="new">New</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Customer Database</CardTitle>
          <CardDescription>You have 89 customers in your database</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead className="hidden md:table-cell">Email</TableHead>
                    <TableHead className="hidden lg:table-cell">Phone</TableHead>
                    <TableHead className="hidden sm:table-cell">Orders</TableHead>
                    <TableHead>Total Spent</TableHead>
                    <TableHead className="hidden md:table-cell">Last Order</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: 1,
                      name: "John Doe",
                      email: "john.doe@example.com",
                      phone: "+234 123 456 7890",
                      orders: 5,
                      spent: "₦25,000",
                      lastOrder: "2025-03-15",
                      status: "active",
                    },
                    {
                      id: 2,
                      name: "Jane Smith",
                      email: "jane.smith@example.com",
                      phone: "+234 123 456 7891",
                      orders: 3,
                      spent: "₦18,500",
                      lastOrder: "2025-03-10",
                      status: "active",
                    },
                    {
                      id: 3,
                      name: "Michael Johnson",
                      email: "michael.j@example.com",
                      phone: "+234 123 456 7892",
                      orders: 7,
                      spent: "₦42,000",
                      lastOrder: "2025-03-18",
                      status: "active",
                    },
                    {
                      id: 4,
                      name: "Sarah Williams",
                      email: "sarah.w@example.com",
                      phone: "+234 123 456 7893",
                      orders: 2,
                      spent: "₦9,500",
                      lastOrder: "2025-02-28",
                      status: "inactive",
                    },
                    {
                      id: 5,
                      name: "David Brown",
                      email: "david.b@example.com",
                      phone: "+234 123 456 7894",
                      orders: 4,
                      spent: "₦22,500",
                      lastOrder: "2025-03-05",
                      status: "active",
                    },
                    {
                      id: 6,
                      name: "Emily Davis",
                      email: "emily.d@example.com",
                      phone: "+234 123 456 7895",
                      orders: 0,
                      spent: "₦0",
                      lastOrder: "-",
                      status: "new",
                    },
                  ].map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={`/placeholder.svg?height=32&width=32&text=${customer.name.charAt(0)}`} />
                            <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="font-medium truncate max-w-[120px]">{customer.name}</span>
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{customer.email}</TableCell>
                      <TableCell className="hidden lg:table-cell">{customer.phone}</TableCell>
                      <TableCell className="hidden sm:table-cell">{customer.orders}</TableCell>
                      <TableCell>{customer.spent}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        {customer.lastOrder !== "-" ? new Date(customer.lastOrder).toLocaleDateString() : "-"}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={`border-0 whitespace-nowrap ${
                            customer.status === "active"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                              : customer.status === "inactive"
                                ? "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                                : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                          }`}
                        >
                          {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Link href={`/dashboard/customers/${customer.id}`}>
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
          Showing <strong>1-6</strong> of <strong>89</strong> customers
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
    </div>
  )
}
