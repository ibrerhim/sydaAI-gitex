"use server"
import { revalidatePath } from "next/cache"
import { connectToDatabase } from "@/lib/mongodb"

type WaitlistEntry = {
  businessName: string
  contactName: string
  email: string
  phone: string
  businessType: string
  employeeCount: string
  message?: string
  createdAt: Date
}

export async function submitWaitlistEntry(data: Omit<WaitlistEntry, "createdAt">) {
  try {
    // Connect to MongoDB
    const { db } = await connectToDatabase()

    // Create a new waitlist entry
    const waitlistEntry: WaitlistEntry = {
      ...data,
      createdAt: new Date(),
    }

    // Insert the data into MongoDB
    const result = await db.collection("waitlist").insertOne(waitlistEntry)

    if (!result.acknowledged) {
      throw new Error("Failed to insert waitlist entry")
    }

    console.log("Waitlist entry submitted:", waitlistEntry)

    // Revalidate the homepage to reflect any changes
    revalidatePath("/")

    return { success: true }
  } catch (error) {
    console.error("Error submitting waitlist entry:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unknown error occurred",
    }
  }
}
