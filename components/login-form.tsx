"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff, User } from "lucide-react"

export function LoginForm() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login attempt:", formData)
    router.push("/dashboard")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="አይዲ ቁጥር ወይም ስም"
            value={formData.username}
            onChange={(e) => setFormData((prev) => ({ ...prev, username: e.target.value }))}
            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 h-14 pl-12 pr-4 rounded-xl"
          />
          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>

        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="የይለፍ ቃል ወይም ፓስወርድ"
            value={formData.password}
            onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 h-14 pl-4 pr-12 rounded-xl"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full h-14 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl text-lg"
      >
        ግባ እና
      </Button>
    </form>
  )
}
