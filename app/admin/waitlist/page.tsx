import { connectToDatabase } from "@/lib/mongodb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const dynamic = "force-dynamic"
export const revalidate = 0

async function getWaitlistEntries() {
  try {
    const { db } = await connectToDatabase()
    const entries = await db.collection("waitlist").find({}).sort({ createdAt: -1 }).toArray()

    // Convert MongoDB documents to plain objects and format dates
    return entries.map((entry) => ({
      ...entry,
      _id: entry._id.toString(),
      createdAt: entry.createdAt.toISOString(),
    }))
  } catch (error) {
    console.error("Error fetching waitlist entries:", error)
    return []
  }
}

export default async function WaitlistPage() {
  const entries = await getWaitlistEntries()

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Waitlist Entries</CardTitle>
          <CardDescription>Businesses that have joined the waitlist</CardDescription>
        </CardHeader>
        <CardContent>
          {entries.length === 0 ? (
            <p className="text-center py-10 text-muted-foreground">No entries yet</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Business Name</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Business Type</TableHead>
                  <TableHead>Employees</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {entries.map((entry) => (
                  <TableRow key={entry._id}>
                    <TableCell className="font-medium">{entry.businessName}</TableCell>
                    <TableCell>{entry.contactName}</TableCell>
                    <TableCell>{entry.email}</TableCell>
                    <TableCell>{entry.phone}</TableCell>
                    <TableCell>{entry.businessType}</TableCell>
                    <TableCell>{entry.employeeCount}</TableCell>
                    <TableCell>{new Date(entry.createdAt).toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
