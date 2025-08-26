import { DashboardLayout } from "@/components/dashboard-layout"
import { WelcomeSection } from "@/components/welcome-section"
import { CurrentCourse } from "@/components/current-course"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-12">
        <WelcomeSection />
        <CurrentCourse />
      </div>
    </DashboardLayout>
  )
}
