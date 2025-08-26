"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, TrendingUp, Target } from "lucide-react"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"

export function WelcomeSection() {
  const router = useRouter()
  const { t } = useLanguage()

  const handleContinueWatching = () => router.push("/courses")
  const handleBrowseCourses = () => router.push("/courses")
  const handleTakeQuiz = () => router.push("/quizzes")

  return (
    <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-center relative overflow-hidden">
      {/* Animated floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-yellow-400 rounded-full animate-bounce-slow`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <div
            key={i + 10}
            className={`absolute w-2 h-2 bg-purple-400 rounded-full animate-pulse-slow`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Welcome message and continue button */}
      <div className="space-y-6 animate-fade-in-left z-10 relative">
        <div>
          <h1 className="text-2xl lg:text-4xl font-bold text-white mb-2 animate-fade-in-down">
            {t("welcomeBack")}
          </h1>
          <p className="text-gray-400 flex items-center gap-2 animate-fade-in">
            <Target className="w-4 h-4 animate-bounce-slow" />
            {t("goToPreviousCourse")}
          </p>
        </div>

        <Button
          onClick={handleContinueWatching}
          className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 lg:px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 animate-bounce"
        >
          <Play className="w-4 h-4 animate-ping-slow" />
          {t("continueWatching")}
        </Button>

        <div className="flex gap-2 pt-2">
          <Button
            onClick={handleBrowseCourses}
            variant="outline"
            size="sm"
            className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent transition-transform hover:scale-105 animate-fade-in"
          >
            Browse Courses
          </Button>
          <Button
            onClick={handleTakeQuiz}
            variant="outline"
            size="sm"
            className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent transition-transform hover:scale-105 animate-fade-in"
          >
            Take Quiz
          </Button>
        </div>
      </div>

      {/* Centered cartoon image for tutorials */}
      <div className="flex justify-center relative animate-float z-10">
        <div className="relative">
          <img
            src="/cartoon-student-tutorial.png"
            alt="Students learning tutorials"
            className="w-48 h-36 lg:w-64 lg:h-48 object-contain hover:scale-105 transition-transform duration-500 animate-float-slow"
          />
          {/* Floating shapes around image */}
          <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-400 rounded-full animate-bounce-slow"></div>
          <div className="absolute bottom-8 left-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-10 left-1/2 w-2 h-2 bg-green-400 rounded-full animate-ping-slow"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-bounce-slow"></div>
        </div>
      </div>

      {/* Current Level Card */}
      <Card className="bg-gradient-to-br from-purple-600 to-purple-700 p-4 lg:p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-500 animate-fade-in-up z-10">
        <div className="mb-4 lg:mb-6">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-white animate-bounce-slow" />
            <h3 className="text-white font-semibold animate-fade-in">{t("currentLevel")}</h3>
          </div>
          <h2 className="text-white text-lg lg:text-xl font-bold mb-2 animate-fade-in">
            {t("diyRepair")}
          </h2>
          <div className="space-y-1 animate-fade-in">
            <p className="text-purple-100 text-sm flex items-center justify-between">
              <span>0 {t("coursesCompleted")}</span>
              <span className="bg-purple-800 px-2 py-1 rounded text-xs animate-pulse">Beginner</span>
            </p>
            <p className="text-purple-100 text-sm">1 {t("coursesStarted")}</p>
          </div>
        </div>

        {/* Animated Progress Circle */}
        <div className="flex justify-center mb-4">
          <div className="relative w-20 h-20 lg:w-24 lg:h-24 animate-spin-slow">
            <svg className="w-20 h-20 lg:w-24 lg:h-24 transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.2)" strokeWidth="8" fill="none" />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="white"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${0 * 2.51} 251`}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center animate-fade-in">
                <div className="text-white font-bold text-base lg:text-lg">0.0%</div>
                <div className="text-purple-100 text-xs">{t("completed")}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 text-center">
          <p className="text-purple-100 text-xs italic animate-fade-in">"Every expert was once a beginner"</p>
        </div>
      </Card>
    </div>
  )
}
