import { HelpCircle } from "lucide-react"

export function QuizHeader() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold text-white">Quizzes for course</h1>
      <HelpCircle className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
    </div>
  )
}
