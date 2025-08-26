"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/contexts/language-context"
import {
  Menu,
  Search,
  Bell,
  LayoutDashboard,
  BookOpen,
  HelpCircle,
  MessageSquare,
  Code,
  Users,
  FileText,
  Settings,
  X,
  TrendingUp,
} from "lucide-react"

interface DashboardLayoutProps {
  children: React.ReactNode
}

type SidebarItem = {
  icon: React.ElementType
  label: string
  href: string
  badge?: string
  active?: boolean
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()
  const { t } = useLanguage()

  const getCurrentDate = () => {
    const now = new Date()
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    }
    return now.toLocaleDateString("en-US", options)
  }

  const getRegistrationDate = () => {
    const now = new Date()
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      year: "numeric",
    }
    return now.toLocaleDateString("en-US", options)
  }

  const sidebarItems: SidebarItem[] = [
    { icon: LayoutDashboard, label: t("dashboard"), href: "/dashboard", active: true },
    { icon: BookOpen, label: t("courses"), href: "/courses" },
    { icon: HelpCircle, label: t("quizzes"), href: "/quizzes" },
    { icon: MessageSquare, label: t("chatGpt"), href: "/chat", badge: "new" },
    { icon: Code, label: t("liveCodeEditor"), href: "/editor" },
    { icon: Users, label: t("instructors"), href: "/instructors" },
    { icon: FileText, label: t("blogPost"), href: "/blog" },
    { icon: Settings, label: t("setting"), href: "/settings" },
  ]

  const handleNavigation = (href: string) => {
    router.push(href)
    setSidebarOpen(false)
  }

  const toggleMenu = () => setSidebarOpen(!sidebarOpen)

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-all duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-80 bg-gradient-to-b from-gray-800 to-gray-900 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-300 ease-in-out shadow-2xl border-r border-gray-700`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700 bg-gray-800/50">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold">Icode Ethiopia</h1>
              <p className="text-sm text-gray-400">
                {t("dateRegistered")}:{" "}
                <span className="bg-green-600 px-2 py-1 rounded text-xs">{getRegistrationDate()}</span>
              </p>
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(false)}
            className="text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1 flex-1 overflow-y-auto">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4">
            {t("navigation")}
          </div>
          {sidebarItems.map((item: SidebarItem) => (
            <button
              key={item.href}
              onClick={() => handleNavigation(item.href)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden
                ${item.active
                  ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg transform scale-[1.02] animate-pulse-slow"
                  : "hover:bg-gray-700/50 hover:shadow-md hover:transform hover:scale-[1.02] hover:translate-x-1"}`}
            >
              {item.active && <div className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full animate-pulse"></div>}

              <item.icon
                className={`w-5 h-5 transition-all duration-300 ${
                  item.active ? "text-white animate-bounce-slow" : "text-gray-400 group-hover:text-white group-hover:scale-110"
                }`}
              />
              <div className="flex-1 text-left">
                <div className={`font-medium transition-colors ${item.active ? "text-white" : "text-gray-300"}`}>
                  {item.label}
                </div>
              </div>
              {item.badge && (
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-ping shadow-lg">
                  {item.badge}
                </span>
              )}
              {item.active && <div className="w-2 h-2 bg-white rounded-full shadow-lg animate-pulse"></div>}
            </button>
          ))}
        </nav>

        {/* Progress section */}
        <div className="p-4 border-t border-gray-700 bg-gray-800/30">
          <div className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl p-4 shadow-inner hover:shadow-lg transition-shadow duration-500 transform hover:scale-[1.01]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-white">{t("yourProgress")}</span>
              <TrendingUp className="w-4 h-4 text-green-400 animate-bounce-slow" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">{t("courses")}</span>
                <span className="text-white font-semibold">1/10</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full w-1/10 shadow-sm animate-progress"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarOpen ? "lg:ml-80" : "lg:ml-0"}`}>
        {/* Header */}
        <header className="bg-gray-800 border-b border-gray-700 p-4 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMenu}
                className={`hover:bg-gray-700 transition-all duration-200 ${sidebarOpen ? "bg-gray-700 text-white" : "text-gray-400"}`}
              >
                <Menu className="w-5 h-5" />
              </Button>

              <div className="flex items-center gap-2">
                <div>
                  <div className="text-sm text-gray-400">{t("today")}</div>
                  <div className="font-semibold text-sm lg:text-base">{getCurrentDate()}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 lg:gap-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder={t("search")}
                  className="bg-gray-700 border-gray-600 pl-10 w-48 lg:w-64 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="flex items-center gap-2 lg:gap-3">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors">
                  <img src="/diverse-user-avatars.png" alt="User" className="w-6 h-6 lg:w-8 lg:h-8 rounded-full" />
                </div>
                <div className="hidden lg:block">
                  <div className="font-semibold">{t("guestUser")}</div>
                  <div className="text-xs text-gray-400">+251912374346</div>
                </div>
                <div className="relative">
                  <Bell className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 lg:p-6 flex-1">{children}</main>
      </div>
    </div>
  )
}
