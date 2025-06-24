import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AdminPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Waitlist</CardTitle>
            <CardDescription>View businesses that have joined the waitlist</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Access the list of businesses interested in Smart-ops AI.</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/admin/waitlist">View Waitlist</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
