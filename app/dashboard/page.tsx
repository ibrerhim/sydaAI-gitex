import type { Metadata } from "next"
import { SalesOverview } from "@/components/sales-overview"
import { CustomerInsights } from "@/components/customer-insights"
import { RecentOrders } from "@/components/recent-orders"
import { InventoryStatus } from "@/components/inventory-status"
import { ResponsiveDashboardLayout } from "@/components/responsive-dashboard-layout"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4 p-4 md:p-8 pt-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Total Revenue</h3>
          </div>
          <div className="p-6 pt-0 flex items-center">
            <div className="text-2xl font-bold">$45,231.89</div>
            <div className="ml-2 text-xs text-green-500">+20.1%</div>
          </div>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Subscriptions</h3>
          </div>
          <div className="p-6 pt-0 flex items-center">
            <div className="text-2xl font-bold">+2350</div>
            <div className="ml-2 text-xs text-green-500">+180.1%</div>
          </div>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Sales</h3>
          </div>
          <div className="p-6 pt-0 flex items-center">
            <div className="text-2xl font-bold">+12,234</div>
            <div className="ml-2 text-xs text-green-500">+19%</div>
          </div>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Active Now</h3>
          </div>
          <div className="p-6 pt-0 flex items-center">
            <div className="text-2xl font-bold">+573</div>
            <div className="ml-2 text-xs text-green-500">+201 since last hour</div>
          </div>
        </div>
      </div>
      <ResponsiveDashboardLayout className="md:grid-cols-2 lg:grid-cols-7">
        <SalesOverview className="lg:col-span-4" />
        <CustomerInsights className="lg:col-span-3" />
      </ResponsiveDashboardLayout>
      <ResponsiveDashboardLayout className="md:grid-cols-2 lg:grid-cols-7">
        <RecentOrders className="lg:col-span-4" />
        <InventoryStatus className="lg:col-span-3" />
      </ResponsiveDashboardLayout>
    </div>
  )
}
