import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Printer, Download, MessageSquare } from "lucide-react"

export default function OrderDetailsPage({ params }: { params: { id: string } }) {
  const orderId = params.id

  // This would normally come from a database or API
  const orderDetails = {
    id: orderId,
    customer: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+234 123 456 7890",
      address: "123 Main Street, Lagos, Nigeria",
    },
    date: "2025-03-18",
    status: "completed",
    paymentMethod: "Card Payment",
    paymentStatus: "Paid",
    channel: "WhatsApp",
    items: [
      {
        id: "PRD-001",
        name: "Premium T-shirt",
        variant: "Size L, Blue",
        price: "₦5,000",
        quantity: 1,
        total: "₦5,000",
      },
    ],
    subtotal: "₦5,000",
    shipping: "₦500",
    tax: "₦0",
    total: "₦5,500",
    timeline: [
      { date: "2025-03-18 09:15", event: "Order placed via WhatsApp" },
      { date: "2025-03-18 09:16", event: "Payment completed" },
      { date: "2025-03-18 10:30", event: "Order confirmed" },
      { date: "2025-03-18 14:45", event: "Order shipped" },
      { date: "2025-03-19 11:20", event: "Order delivered" },
    ],
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/orders">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Order {orderDetails.id}</h1>
            <p className="text-muted-foreground">
              Placed on {new Date(orderDetails.date).toLocaleDateString()} via {orderDetails.channel}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm">
            <MessageSquare className="mr-2 h-4 w-4" />
            Contact Customer
          </Button>
          <Button variant="outline" size="sm">
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
          <Button size="sm">
            <Download className="mr-2 h-4 w-4" />
            Invoice
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Order Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Order Status</p>
                <Badge
                  variant="outline"
                  className={`mt-1 border-0 ${
                    orderDetails.status === "completed"
                      ? "bg-green-100 text-green-800"
                      : orderDetails.status === "processing"
                        ? "bg-blue-100 text-blue-800"
                        : orderDetails.status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                  }`}
                >
                  {orderDetails.status.charAt(0).toUpperCase() + orderDetails.status.slice(1)}
                </Badge>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Payment Status</p>
                <p className="font-medium">{orderDetails.paymentStatus}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Payment Method</p>
                <p className="font-medium">{orderDetails.paymentMethod}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Order Channel</p>
                <p className="font-medium">{orderDetails.channel}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Customer Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Customer Name</p>
              <p className="font-medium">{orderDetails.customer.name}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Email</p>
                <p className="font-medium">{orderDetails.customer.email}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Phone</p>
                <p className="font-medium">{orderDetails.customer.phone}</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Shipping Address</p>
              <p className="font-medium">{orderDetails.customer.address}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Order Items</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-2">Product</th>
                  <th className="text-left py-3 px-2">Variant</th>
                  <th className="text-right py-3 px-2">Price</th>
                  <th className="text-right py-3 px-2">Quantity</th>
                  <th className="text-right py-3 px-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.items.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-3 px-2">{item.name}</td>
                    <td className="py-3 px-2">{item.variant}</td>
                    <td className="py-3 px-2 text-right">{item.price}</td>
                    <td className="py-3 px-2 text-right">{item.quantity}</td>
                    <td className="py-3 px-2 text-right font-medium">{item.total}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={3}></td>
                  <td className="py-3 px-2 text-right text-muted-foreground">Subtotal</td>
                  <td className="py-3 px-2 text-right">{orderDetails.subtotal}</td>
                </tr>
                <tr>
                  <td colSpan={3}></td>
                  <td className="py-3 px-2 text-right text-muted-foreground">Shipping</td>
                  <td className="py-3 px-2 text-right">{orderDetails.shipping}</td>
                </tr>
                <tr>
                  <td colSpan={3}></td>
                  <td className="py-3 px-2 text-right text-muted-foreground">Tax</td>
                  <td className="py-3 px-2 text-right">{orderDetails.tax}</td>
                </tr>
                <tr>
                  <td colSpan={3}></td>
                  <td className="py-3 px-2 text-right font-medium">Total</td>
                  <td className="py-3 px-2 text-right font-bold">{orderDetails.total}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Order Timeline</CardTitle>
          <CardDescription>Track the progress of this order</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {orderDetails.timeline.map((event, index) => (
              <div key={index} className="flex items-start">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <div className="h-2 w-2 rounded-full bg-blue-600" />
                </div>
                <div>
                  <p className="font-medium">{event.event}</p>
                  <p className="text-sm text-muted-foreground">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
