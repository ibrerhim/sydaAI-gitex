import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="channels">Channels</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="ai">AI Assistant</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Business Information</CardTitle>
              <CardDescription>Update your business details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input id="businessName" defaultValue="Usman's Store" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="contact@usmansstore.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+234 123 456 7890" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" defaultValue="https://usmansstore.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Business Address</Label>
                <Textarea id="address" defaultValue="123 Main Street, Lagos, Nigeria" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Business Description</Label>
                <Textarea id="description" defaultValue="Premium clothing and accessories store." />
              </div>
              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Business Hours</CardTitle>
              <CardDescription>Set your operating hours</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                  <div key={day} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Switch id={`${day.toLowerCase()}-active`} defaultChecked={day !== "Sunday"} />
                      <Label htmlFor={`${day.toLowerCase()}-active`}>{day}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Input type="time" className="w-24" defaultValue="09:00" disabled={day === "Sunday"} />
                      <span>to</span>
                      <Input type="time" className="w-24" defaultValue="18:00" disabled={day === "Sunday"} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-end">
                <Button>Save Hours</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="channels" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Connected Channels</CardTitle>
              <CardDescription>Manage your WhatsApp and Instagram connections</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg border p-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                      W
                    </div>
                    <div>
                      <h3 className="font-medium">WhatsApp Business</h3>
                      <p className="text-sm text-muted-foreground">Connected as +234 123 456 7890</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline">Disconnect</Button>
                    <Button>Settings</Button>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center text-white font-bold">
                      I
                    </div>
                    <div>
                      <h3 className="font-medium">Instagram</h3>
                      <p className="text-sm text-muted-foreground">Connected as @usmansstore</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline">Disconnect</Button>
                    <Button>Settings</Button>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-dashed p-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                      +
                    </div>
                    <div>
                      <h3 className="font-medium">Add New Channel</h3>
                      <p className="text-sm text-muted-foreground">Connect another messaging platform</p>
                    </div>
                  </div>
                  <Button>Connect</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Choose how you want to be notified</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email Notifications</h3>
                <div className="space-y-2">
                  {[
                    { id: "new-order", label: "New Orders" },
                    { id: "payment-received", label: "Payment Received" },
                    { id: "low-stock", label: "Low Stock Alerts" },
                    { id: "customer-message", label: "Customer Messages" },
                    { id: "weekly-summary", label: "Weekly Summary" },
                  ].map((item) => (
                    <div key={item.id} className="flex items-center space-x-2">
                      <Switch id={item.id} defaultChecked />
                      <Label htmlFor={item.id}>{item.label}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Mobile Notifications</h3>
                <div className="space-y-2">
                  {[
                    { id: "mobile-new-order", label: "New Orders" },
                    { id: "mobile-payment-received", label: "Payment Received" },
                    { id: "mobile-low-stock", label: "Low Stock Alerts" },
                    { id: "mobile-customer-message", label: "Customer Messages" },
                  ].map((item) => (
                    <div key={item.id} className="flex items-center space-x-2">
                      <Switch id={item.id} defaultChecked />
                      <Label htmlFor={item.id}>{item.label}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Save Preferences</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI Assistant Configuration</CardTitle>
              <CardDescription>Customize how your AI assistant interacts with customers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="assistantName">Assistant Name</Label>
                <Input id="assistantName" defaultValue="Smart Assistant" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="welcomeMessage">Welcome Message</Label>
                <Textarea
                  id="welcomeMessage"
                  defaultValue="Hello! Welcome to Usman's Store. How can I help you today?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="responseStyle">Response Style</Label>
                <Select defaultValue="friendly">
                  <SelectTrigger id="responseStyle">
                    <SelectValue placeholder="Select style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="friendly">Friendly and Casual</SelectItem>
                    <SelectItem value="professional">Professional and Formal</SelectItem>
                    <SelectItem value="enthusiastic">Enthusiastic and Energetic</SelectItem>
                    <SelectItem value="concise">Concise and Direct</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">AI Capabilities</h3>
                <div className="space-y-2">
                  {[
                    { id: "product-info", label: "Product Information" },
                    { id: "order-taking", label: "Order Taking" },
                    { id: "payment-processing", label: "Payment Processing" },
                    { id: "order-tracking", label: "Order Tracking" },
                    { id: "customer-support", label: "Customer Support" },
                  ].map((item) => (
                    <div key={item.id} className="flex items-center space-x-2">
                      <Switch id={item.id} defaultChecked />
                      <Label htmlFor={item.id}>{item.label}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Save Configuration</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Subscription Plan</CardTitle>
              <CardDescription>Manage your subscription and billing details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg border p-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-medium">Premium Plan</h3>
                    <p className="text-sm text-muted-foreground">₦10,000/month • Renews on April 18, 2025</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline">Cancel Plan</Button>
                    <Button>Upgrade</Button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Payment Method</h3>
                <div className="rounded-lg border p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="h-10 w-10 rounded-lg bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                        V
                      </div>
                      <div>
                        <h3 className="font-medium">Visa ending in 4242</h3>
                        <p className="text-sm text-muted-foreground">Expires 12/25</p>
                      </div>
                    </div>
                    <Button variant="outline">Update</Button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Billing History</h3>
                <div className="rounded-lg border">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Date</th>
                          <th className="text-left py-3 px-4">Description</th>
                          <th className="text-left py-3 px-4">Amount</th>
                          <th className="text-left py-3 px-4">Status</th>
                          <th className="text-right py-3 px-4">Invoice</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            date: "2025-03-18",
                            description: "Premium Plan - Monthly",
                            amount: "₦10,000",
                            status: "Paid",
                          },
                          {
                            date: "2025-02-18",
                            description: "Premium Plan - Monthly",
                            amount: "₦10,000",
                            status: "Paid",
                          },
                          {
                            date: "2025-01-18",
                            description: "Premium Plan - Monthly",
                            amount: "₦10,000",
                            status: "Paid",
                          },
                        ].map((item, index) => (
                          <tr key={index} className="border-b">
                            <td className="py-3 px-4">{new Date(item.date).toLocaleDateString()}</td>
                            <td className="py-3 px-4">{item.description}</td>
                            <td className="py-3 px-4">{item.amount}</td>
                            <td className="py-3 px-4">{item.status}</td>
                            <td className="py-3 px-4 text-right">
                              <Button variant="ghost" size="sm">
                                Download
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
