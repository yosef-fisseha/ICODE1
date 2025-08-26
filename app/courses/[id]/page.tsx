"use client"

import { useState, useEffect } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Clock, Users, Star, BookOpen } from "lucide-react"
import { useParams } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function CoursePage() {
  const params = useParams()
  const courseId = params.id as string
  const [course, setCourse] = useState<any>(null)
  const [selectedVideo, setSelectedVideo] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCourse() {
      setLoading(true)
      try {
        // Try to fetch from /courses/[id]/data/[id].json in the public folder
        const res = await fetch(`/courses/${courseId}/data/${courseId}.json`)
        if (!res.ok) throw new Error("Course not found")
        const data = await res.json()
        setCourse(data)
      } catch (e) {
        setCourse(null)
      }
      setLoading(false)
    }
    if (courseId) fetchCourse()
  }, [courseId])

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-400">Loading...</p>
        </div>
      </DashboardLayout>
    )
  }

  if (!course) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-400">Course not found</p>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Course Header */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <div
              className={`${course.backgroundColor} rounded-lg p-8 flex items-center justify-center min-w-[200px] h-[200px]`}
            >
              <img src={course.image} alt={course.title} className="w-32 h-32 object-contain" />
            </div>

            <div className="flex-1 space-y-4">
              <h1 className="text-3xl font-bold text-white">{course.title}</h1>
              <p className="text-gray-300 text-lg">{course.description}</p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1"><Users className="w-4 h-4" /> <span>{course.students} students</span></div>
                <div className="flex items-center gap-1"><Clock className="w-4 h-4" /> <span>{course.duration}</span></div>
                <div className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-500" /> <span>{course.rating}</span></div>
                <div className="flex items-center gap-1"><BookOpen className="w-4 h-4" /> <span>By {course.instructor}</span></div>
              </div>

              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">Start Learning</Button>
            </div>
          </div>
        </div>

        {/* Course Videos */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Course Content</h2>
          <div className="grid gap-4">
            {course.videos.map((video: any) => (
              <Card key={video.id} className="bg-gray-800 border-gray-700 p-4 hover:bg-gray-750 cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img src={video.thumbnail} alt={video.title} className="w-20 h-12 object-cover rounded bg-gray-700" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium">{video.title}</h3>
                    <p className="text-gray-400 text-sm">{video.duration}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-purple-400 hover:text-purple-300"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Play
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Video Player Modal */}
        <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>{selectedVideo?.title}</DialogTitle>
            </DialogHeader>
            {selectedVideo && (
              <iframe
                width="100%"
                height="450"
                src={selectedVideo.url}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded"
              ></iframe>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  )
}