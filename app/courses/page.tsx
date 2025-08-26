"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { CourseTabs } from "@/components/course-tabs"
import { CourseGrid } from "@/components/course-grid"

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("Other courses")

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <CourseTabs onTabChange={setActiveCategory} />
        <CourseGrid activeCategory={activeCategory} />
      </div>
    </DashboardLayout>
  )
}
