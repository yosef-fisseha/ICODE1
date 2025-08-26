"use client"

import { useState, useEffect } from "react"

export function LanguageSettings() {
  const [selectedLanguage, setSelectedLanguage] = useState("English")

  const languages = [
    { id: "amharic", name: "Amharic", value: "Amharic" },
    { id: "english", name: "English", value: "English" },
  ]

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage")
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage)
      applyLanguage(savedLanguage)
    }
  }, [])

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language)
    localStorage.setItem("selectedLanguage", language)
    applyLanguage(language)
  }

  const applyLanguage = (language: string) => {
    // Apply language changes to the document
    document.documentElement.setAttribute("lang", language === "Amharic" ? "am" : "en")

    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent("languageChanged", { detail: { language } }))

    // Show confirmation message
    const message = language === "Amharic" ? "ቋንቋ ወደ አማርኛ ተቀይሯል" : "Language changed to English"

    // Create temporary notification
    const notification = document.createElement("div")
    notification.textContent = message
    notification.className =
      "fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 transition-all duration-300"
    document.body.appendChild(notification)

    setTimeout(() => {
      notification.remove()
    }, 3000)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">Language</h2>

      <div className="space-y-4">
        {languages.map((language) => (
          <label key={language.id} className="flex items-center gap-4 cursor-pointer group">
            <div className="relative">
              <input
                type="radio"
                name="language"
                value={language.value}
                checked={selectedLanguage === language.value}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="sr-only"
              />
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                  selectedLanguage === language.value
                    ? "border-teal-500 bg-teal-500 scale-110"
                    : "border-gray-400 bg-transparent hover:border-teal-400"
                }`}
              >
                {selectedLanguage === language.value && (
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                )}
              </div>
            </div>
            <span
              className={`text-lg transition-all duration-200 ${
                selectedLanguage === language.value
                  ? "text-white font-semibold"
                  : "text-gray-400 group-hover:text-gray-300"
              }`}
            >
              {language.name}
            </span>
            {selectedLanguage === language.value && (
              <span className="ml-auto text-sm text-teal-400 font-medium">Active</span>
            )}
          </label>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-700 rounded-lg">
        <p className="text-sm text-gray-300 mb-2">
          <strong>Current Language:</strong> {selectedLanguage}
        </p>
        <p className="text-xs text-gray-400">
          {selectedLanguage === "Amharic"
            ? "አማርኛ ቋንቋ ተመርጧል። አንዳንድ ክፍሎች በአማርኛ ይታያሉ።"
            : "English language is selected. Interface elements will display in English."}
        </p>
      </div>
    </div>
  )
}
