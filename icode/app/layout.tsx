"use client"

import { ReactNode } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DashboardLayout>
      <main className="p-6">
        {children}
      </main>
    </DashboardLayout>
  )
}