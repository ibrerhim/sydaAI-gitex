import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus, Filter } from "lucide-react"

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Products</h1>
          <p className="text-muted-foreground">Manage your product catalog and inventory</p>
        </div>
        <div>
          <Link href="/dashboard/products/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Product
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search products..." className="w-full pl-8" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-full sm:w-[180px]">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Products</SelectItem>
            <SelectItem value="in-stock">In Stock</SelectItem>
            <SelectItem value="low-stock">Low Stock</SelectItem>
            <SelectItem value="out-of-stock">Out of Stock</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Product Catalog</CardTitle>
          <CardDescription>You have 15 products in your catalog</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Sales</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    id: 1,
                    name: "Premium T-Shirt",
                    image: "/placeholder.svg?height=40&width=40",
                    category: "Clothing",
                    price: "₦5,000",
                    stock: 45,
                    sales: 120,
                    status: "in-stock",
                  },
                  {
                    id: 2,
                    name: "Designer Jeans",
                    image: "/placeholder.svg?height=40&width=40",
                    category: "Clothing",
                    price: "₦12,000",
                    stock: 28,
                    sales: 85,
                    status: "in-stock",
                  },
                  {
                    id: 3,
                    name: "Leather Wallet",
                    image: "/placeholder.svg?height=40&width=40",
                    category: "Accessories",
                    price: "₦8,500",
                    stock: 12,
                    sales: 64,
                    status: "low-stock",
                  },
                  {
                    id: 4,
                    name: "Wireless Earbuds",
                    image: "/placeholder.svg?height=40&width=40",
                    category: "Electronics",
                    price: "₦15,000",
                    stock: 8,
                    sales: 42,
                    status: "low-stock",
                  },
                  {
                    id: 5,
                    name: "Smartphone Case",
                    image: "/placeholder.svg?height=40&width=40",
                    category: "Accessories",
                    price: "₦3,500",
                    stock: 2,
                    sales: 38,
                    status: "low-stock",
                  },
                  {
                    id: 6,
                    name: "Fitness Tracker",
                    image: "/placeholder.svg?height=40&width=40",
                    category: "Electronics",
                    price: "₦18,000",
                    stock: 15,
                    sales: 29,
                    status: "in-stock",
                  },
                  {
                    id: 7,
                    name: "Water Bottle",
                    image: "/placeholder.svg?height=40&width=40",
                    category: "Accessories",
                    price: "₦2,500",
                    stock: 0,
                    sales: 56,
                    status: "out-of-stock",
                  },
                ].map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="h-10 w-10 rounded-md object-cover"
                        />
                        <span className="font-medium">{product.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={`border-0 ${
                          product.status === "in-stock"
                            ? "bg-green-100 text-green-800"
                            : product.status === "low-stock"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {product.status === "in-stock"
                          ? "In Stock"
                          : product.status === "low-stock"
                            ? "Low Stock"
                            : "Out of Stock"}
                      </Badge>
                    </TableCell>
                    <TableCell>{product.sales}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Link href={`/dashboard/products/${product.id}`}>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </Link>
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700 hover:bg-red-50">
                          Delete
                        </Button>
                      </div>
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
          Showing <strong>1-7</strong> of <strong>15</strong> products
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
    </div>
  )
}
