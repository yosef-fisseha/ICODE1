"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MoreVertical, BookOpen } from "lucide-react"
import { useRouter } from "next/navigation"

interface Course {
  id: number
  title: string
  description: string
  image: string
  backgroundColor: string
  status: string
  instructors: number
  instructorAvatar: string
}

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  const router = useRouter()

  const handleCourseClick = () => {
    router.push(`/courses/${course.id}`)
  }

  return (
    <Card
      className="bg-gray-800 border-gray-700 overflow-hidden cursor-pointer hover:bg-gray-750 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
      onClick={handleCourseClick}
    >
      {/* Course Image/Header */}
      <div className="relative h-48 overflow-hidden">
        {/* Full background image */}
        <img
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />

        {/* Gradient overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        <div className="absolute top-3 left-3">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-3 right-3">
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <MoreVertical className="w-4 h-4" />
          </Button>
        </div>

        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-4 space-y-4">
        <h3 className="text-white font-semibold text-lg leading-tight group-hover:text-purple-400 transition-colors">
          {course.title}
        </h3>

        <p className="text-gray-400 text-sm line-clamp-4 leading-relaxed group-hover:text-gray-300 transition-colors">
          {course.description}
        </p>

        <div className="flex items-center justify-between">
          <Button
            size="sm"
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105"
            onClick={(e) => e.stopPropagation()}
          >
            {course.status}
          </Button>

          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
            <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
              {course.instructors}
            </span>
            <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Instructors</span>
            <img
              src={course.instructorAvatar || "/placeholder.svg"}
              alt="Instructor"
              className="w-6 h-6 rounded-full ring-2 ring-transparent group-hover:ring-purple-400 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </Card>
  )
}
