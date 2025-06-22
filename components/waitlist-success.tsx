"use client"

import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WaitlistSuccess({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-6 text-center">
      <div className="rounded-full bg-green-100 p-3 dark:bg-green-900/30 mb-4">
        <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
      </div>
      <h3 className="text-xl font-bold mb-2">You're on the list!</h3>
      <p className="text-muted-foreground mb-6 max-w-md">
        Thank you for your interest in Syda AI. We'll be in touch soon with more information about our launch and how
        you can get early access.
      </p>
      <Button onClick={onClose}>Close</Button>
    </div>
  )
}
