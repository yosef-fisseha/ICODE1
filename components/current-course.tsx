"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Clock, Star, BookOpen, Users, MoreVertical } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

// Import or define your full course list here (copy from course-grid.tsx if needed)
const allCourses = [
  {
    id: 1,
    title: "Computer Basics for Beginners",
    description: "Learn the fundamentals of computers, operating systems, and basic software usage. Perfect for absolute beginners who want to start their digital journey.",
    thumbnail: "/Computer Basics for Beginners.jpg",
    duration: "6 hours",
    instructor: {
      name: "Sarah Ahmed",
      avatar: "/instructor-avatar.png",
    },
    status: "NOT VIEWED",
    rating: 4.8,
    students: 1250,
  },
  // ...add all other courses here...
]

export function CurrentCourse() {
  const { t } = useLanguage()
  const [courses, setCourses] = useState<any[]>([])

  useEffect(() => {
    // Get viewed course ids from localStorage
    const viewedIds = JSON.parse(localStorage.getItem("currentCourses") || "[]")
    // Filter allCourses to only those viewed
    setCourses(allCourses.filter((c) => viewedIds.includes(c.id)))
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <BookOpen className="w-6 h-6 text-purple-400" />
          <h2 className="text-xl lg:text-2xl font-bold text-white">{t("currentCourse")}</h2>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white whitespace-nowrap shadow-md">
            {t("all")}
          </Button>
          <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-700 whitespace-nowrap">
            {t("inProgress")}
          </Button>
          <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-700 whitespace-nowrap">
            {t("completed")}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
        {courses.length === 0 && (
          <div className="col-span-full text-center text-gray-400">{t("noCurrentCourses") || "No current courses yet."}</div>
        )}
        {courses.map((course) => (
          <Card
            key={course.id}
            className="bg-gray-800 border-gray-700 overflow-hidden hover:shadow-xl hover:border-purple-500 transition-all duration-300 group"
          >
            <div className="relative">
              <img
                src={course.thumbnail || "/placeholder.svg"}
                alt={course.title}
                className="w-full h-40 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 rounded-full w-12 h-12 lg:w-16 lg:h-16 shadow-lg"
                >
                  <Play className="w-4 h-4 lg:w-6 lg:h-6 text-white ml-1" />
                </Button>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>

            <div className="p-4">
              <h3 className="text-white font-semibold mb-2 line-clamp-2 text-sm lg:text-base group-hover:text-purple-300 transition-colors">
                {course.title}
              </h3>
              <p className="text-gray-400 text-xs lg:text-sm mb-4 line-clamp-2">{course.description}</p>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-xs lg:text-sm">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-gray-400 text-xs lg:text-sm">{course.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-xs lg:text-sm">{course.students} students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 text-xs lg:text-sm">Instructors</span>
                    <img
                      src={course.instructor.avatar || "/placeholder.svg"}
                      alt={course.instructor.name}
                      className="w-5 h-5 lg:w-6 lg:h-6 rounded-full border-2 border-purple-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}