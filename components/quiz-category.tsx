"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

interface Quiz {
  id: number
  title: string
  questions: number
  status: string
  statusColor: string
}

interface QuizCategoryProps {
  category: {
    id: number
    title: string
    icon: string
    quizzes: Quiz[]
  }
}

export function QuizCategory({ category }: QuizCategoryProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="space-y-4">
      {/* Category Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={category.icon || "/placeholder.svg"} alt={category.title} className="w-12 h-12 rounded-full" />
          <h2 className="text-xl font-semibold text-white">{category.title}</h2>
        </div>

        <Button
          variant="ghost"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-400 hover:text-white flex items-center gap-2"
        >
          See All
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </Button>
      </div>

      {/* Quiz Cards */}
      {isExpanded && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ml-15">
          {category.quizzes.map((quiz) => (
            <Card key={quiz.id} className="bg-gray-800 border-gray-700 p-6">
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg">{quiz.title}</h3>
                <p className="text-gray-400">{quiz.questions} Questions</p>

                <Button
                  size="sm"
                  className={`${quiz.statusColor} hover:opacity-90 text-white px-4 py-2 rounded-full text-sm font-medium`}
                >
                  {quiz.status}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Show first quiz by default */}
      {!isExpanded && category.quizzes.length > 0 && (
        <div className="ml-15">
          <Card className="bg-gray-800 border-gray-700 p-6 max-w-sm">
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">{category.quizzes[0].title}</h3>
              <p className="text-gray-400">{category.quizzes[0].questions} Questions</p>

              <Button
                size="sm"
                className={`${category.quizzes[0].statusColor} hover:opacity-90 text-white px-4 py-2 rounded-full text-sm font-medium`}
              >
                {category.quizzes[0].status}
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
