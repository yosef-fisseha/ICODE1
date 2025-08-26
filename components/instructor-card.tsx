"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageSquare } from "lucide-react"

interface Instructor {
  id: number
  name: string
  role: string
  avatar: string
}

interface InstructorCardProps {
  instructor: Instructor
}

export function InstructorCard({ instructor }: InstructorCardProps) {
  const handleSendMessage = () => {
    // Handle send message functionality
    console.log(`Sending message to ${instructor.name}`)
  }

  return (
    <Card className="bg-gray-800 border-gray-700 p-6 text-center space-y-6">
      {/* Instructor Avatar */}
      <div className="flex justify-center">
        <img
          src={instructor.avatar || "/placeholder.svg"}
          alt={instructor.name}
          className="w-20 h-20 rounded-full object-cover"
        />
      </div>

      {/* Instructor Info */}
      <div className="space-y-2">
        <h3 className="text-white font-semibold text-lg">{instructor.name}</h3>
        <p className="text-gray-400">{instructor.role}</p>
      </div>

      {/* Send Message Button */}
      <Button
        onClick={handleSendMessage}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
      >
        <MessageSquare className="w-4 h-4" />
        SEND MESSAGE
      </Button>
    </Card>
  )
}
