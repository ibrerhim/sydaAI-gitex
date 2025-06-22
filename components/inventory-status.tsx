import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type Product = {
  id: string
  name: string
  category: string
  price: number
  stock: number
  status: "in-stock" | "low-stock" | "out-of-stock"
}

const products: Product[] = [
  {
    id: "PRD-001",
    name: "Premium T-shirt",
    category: "Clothing",
    price: 5000,
    stock: 25,
    status: "in-stock",
  },
  {
    id: "PRD-002",
    name: "Casual Jeans",
    category: "Clothing",
    price: 8500,
    stock: 12,
    status: "in-stock",
  },
  {
    id: "PRD-003",
    name: "Sneakers",
    category: "Footwear",
    price: 12000,
    stock: 3,
    status: "low-stock",
  },
  {
    id: "PRD-004",
    name: "Hoodie",
    category: "Clothing",
    price: 7500,
    stock: 18,
    status: "in-stock",
  },
  {
    id: "PRD-005",
    name: "Cap",
    category: "Accessories",
    price: 2500,
    stock: 0,
    status: "out-of-stock",
  },
  {
    id: "PRD-006",
    name: "Sunglasses",
    category: "Accessories",
    price: 4500,
    stock: 5,
    status: "low-stock",
  },
]

const statusColors = {
  "in-stock": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  "low-stock": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  "out-of-stock": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
}

export function InventoryStatus() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Inventory Status</CardTitle>
          <CardDescription>Manage your product inventory</CardDescription>
        </div>
        <Button asChild>
          <Link href="/dashboard/products/new">Add Product</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>₦{product.price.toLocaleString()}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={`${statusColors[product.status]} border-0`}>
                      {product.status
                        .split("-")
                        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(" ")}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/dashboard/products/${product.id}`}>Edit</Link>
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
