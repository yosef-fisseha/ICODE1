import { DashboardLayout } from "@/components/dashboard-layout"
import { InstructorsHeader } from "@/components/instructors-header"
import { InstructorsGrid } from "@/components/instructors-grid"

export default function InstructorsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <InstructorsHeader />
        <InstructorsGrid />
      </div>
    </DashboardLayout>
  )
}
