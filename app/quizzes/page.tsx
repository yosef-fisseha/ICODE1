import { DashboardLayout } from "@/components/dashboard-layout"
import { QuizHeader } from "@/components/quiz-header"
import { QuizCategory } from "@/components/quiz-category"

export default function QuizzesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <QuizHeader />
        <QuizCategory category={{ id: 1, title: "Category 1", icon: "/placeholder.svg", quizzes: [] }} />
      </div>
    </DashboardLayout>
  )
}
