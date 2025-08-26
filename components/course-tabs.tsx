"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const tabs = [
  "Pick Your Level",
  "DIY Repair",
  "Other courses",
  "Advanced programming",
  "Intermediate programming",
  "Beginner programming",
]

interface CourseTabsProps {
  onTabChange: (tab: string) => void
}

export function CourseTabs({ onTabChange }: CourseTabsProps) {
  const [activeTab, setActiveTab] = useState("Other courses")

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
    onTabChange(tab) // Added callback to notify parent component of tab changes
  }

  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {tabs.map((tab) => (
        <Button
          key={tab}
          variant={activeTab === tab ? "default" : "ghost"}
          className={`whitespace-nowrap rounded-full px-6 py-2 ${
            activeTab === tab
              ? "bg-purple-600 hover:bg-purple-700 text-white"
              : "text-gray-400 hover:text-white hover:bg-gray-800"
          }`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </Button>
      ))}
    </div>
  )
}
