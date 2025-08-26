"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface LanguageContextType {
  language: string
  setLanguage: (lang: string) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  English: {
    // Navigation
    dashboard: "Dashboard",
    courses: "Courses",
    quizzes: "Quizzes",
    chatGpt: "Chat Gpt",
    liveCodeEditor: "Live Code Editor",
    instructors: "Instructors",
    blogPost: "Blog Post",
    setting: "Setting",

    // Header
    today: "Today",
    search: "search..",
    guestUser: "gust user",

    // Dashboard
    welcomeBack: "Welcome Back",
    goToPreviousCourse: "Go to previous course",
    continueWatching: "Continue Watching",
    currentLevel: "Current Level",
    diyRepair: "DIY Software Repair",
    coursesCompleted: "Courses Completed",
    coursesStarted: "Courses Started",
    completed: "Completed",
    currentCourse: "Current Course",
    all: "All",
    inProgress: "In Progress",

    // Course titles
    fixCorruptedFlash: "3 ways to fix a corrupted Flash...",
    fixStuckWindows: "7 Ways Fix Stuck Windows in A...",
    appsNotWorking: "Apps Not working or...",

    // Settings
    settings: "Settings",
    logout: "LOGOUT",
    language: "Language",
    amharic: "Amharic",
    english: "English",
    dateRegistered: "Date Registered",

    // Course categories
    pickYourLevel: "Pick Your Level",
    otherCourses: "Other courses",
    advancedProgramming: "Advanced programming",
    intermediateProgramming: "Intermediate programming",
    beginnerProgramming: "Beginner programming",

    // ChatGPT
    useChat: "use chat-gpt",
    getHelpFromChat: "Get help from chat-gpt",
    chatWithAI: "Chat with ai to get help and ask questions",

    // Practice coding
    practiceCoding: "Practice coding",
    liveCodeEditor2: "Live code editor",
    useLiveCodeEditor: "Use our live code editor to practice coding",
  },
  Amharic: {
    // Navigation
    dashboard: "ዳሽቦርድ",
    courses: "ኮርሶች",
    quizzes: "ጥያቄዎች",
    chatGpt: "ቻት ጂፒቲ",
    liveCodeEditor: "የቀጥታ ኮድ አርታዒ",
    instructors: "አስተማሪዎች",
    blogPost: "የብሎግ ፅሁፍ",
    setting: "ቅንብር",

    // Header
    today: "ዛሬ",
    search: "ፈልግ..",
    guestUser: "እንግዳ ተጠቃሚ",

    // Dashboard
    welcomeBack: "እንኳን ደህና መጡ",
    goToPreviousCourse: "ወደ ቀዳሚ ኮርስ ይሂዱ",
    continueWatching: "መመልከትን ይቀጥሉ",
    currentLevel: "የአሁን ደረጃ",
    diyRepair: "DIY ሶፍትዌር ጥገና",
    coursesCompleted: "የተጠናቀቁ ኮርሶች",
    coursesStarted: "የተጀመሩ ኮርሶች",
    completed: "ተጠናቋል",
    currentCourse: "የአሁን ኮርስ",
    all: "ሁሉም",
    inProgress: "በሂደት ላይ",

    // Course titles
    fixCorruptedFlash: "የተበላሸ ፍላሽ ለማስተካከል 3 መንገዶች...",
    fixStuckWindows: "በዊንዶውስ ውስጥ የተጣበቁ መተግበሪያዎችን ለማስተካከል 7 መንገዶች...",
    appsNotWorking: "መተግበሪያዎች አይሰሩም ወይም...",

    // Settings
    settings: "ቅንብሮች",
    logout: "ውጣ",
    language: "ቋንቋ",
    amharic: "አማርኛ",
    english: "እንግሊዝኛ",
    dateRegistered: "የተመዘገበበት ቀን",

    // Course categories
    pickYourLevel: "ደረጃዎን ይምረጡ",
    otherCourses: "ሌሎች ኮርሶች",
    advancedProgramming: "የላቀ ፕሮግራሚንግ",
    intermediateProgramming: "መካከለኛ ፕሮግራሚንግ",
    beginnerProgramming: "ጀማሪ ፕሮግራሚንግ",

    // ChatGPT
    useChat: "ቻት-ጂፒቲ ተጠቀም",
    getHelpFromChat: "ከቻት-ጂፒቲ እርዳታ ያግኙ",
    chatWithAI: "ከAI ጋር ተወያይተው እርዳታ ያግኙ እና ጥያቄዎችን ይጠይቁ",

    // Practice coding
    practiceCoding: "ኮዲንግ ይለማመዱ",
    liveCodeEditor2: "የቀጥታ ኮድ አርታዒ",
    useLiveCodeEditor: "ኮዲንግ ለመለማመድ የእኛን የቀጥታ ኮድ አርታዒ ይጠቀሙ",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState("English")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage")
    if (savedLanguage) {
      setLanguageState(savedLanguage)
    }

    const handleLanguageChange = (event: CustomEvent) => {
      setLanguageState(event.detail.language)
    }

    window.addEventListener("languageChanged", handleLanguageChange as EventListener)
    return () => {
      window.removeEventListener("languageChanged", handleLanguageChange as EventListener)
    }
  }, [])

  const setLanguage = (lang: string) => {
    setLanguageState(lang)
    localStorage.setItem("selectedLanguage", lang)
    document.documentElement.setAttribute("lang", lang === "Amharic" ? "am" : "en")
    window.dispatchEvent(new CustomEvent("languageChanged", { detail: { language: lang } }))
  }

  const t = (key: string): string => {
    return translations[language as keyof typeof translations]?.[key as keyof typeof translations.English] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
