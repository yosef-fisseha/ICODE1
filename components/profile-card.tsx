import { Card } from "@/components/ui/card"

export function ProfileCard() {
  return (
    <Card className="bg-gradient-to-r from-purple-600 to-purple-700 p-4 lg:p-8 rounded-2xl">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* User Info Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 lg:gap-6 text-center sm:text-left">
          <img
            src="/user-profile-avatar.png"
            alt="User Profile"
            className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border-4 border-white/20"
          />
          <div className="text-white">
            <h2 className="text-xl lg:text-2xl font-bold mb-1">+251912374346</h2>
            <p className="text-purple-100 text-base lg:text-lg mb-3">gust user</p>
            <p className="text-purple-100 text-sm">
              Date Registered: <span className="font-semibold">Aug 12, 2025</span>
            </p>
          </div>
        </div>

        {/* Progress Circles */}
        <div className="flex justify-center gap-4 lg:gap-8">
          {/* Courses Completed Circle */}
          <div className="relative w-24 h-24 lg:w-32 lg:h-32">
            <svg className="w-24 h-24 lg:w-32 lg:h-32 transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="35" stroke="rgba(255,255,255,0.2)" strokeWidth="6" fill="none" />
              <circle
                cx="50"
                cy="50"
                r="35"
                stroke="white"
                strokeWidth="6"
                fill="none"
                strokeDasharray={`${50 * 2.2} 220`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-white font-bold text-lg lg:text-2xl">50%</div>
                <div className="text-purple-100 text-xs lg:text-sm">Courses</div>
                <div className="text-purple-100 text-xs lg:text-sm">Completed</div>
              </div>
            </div>
          </div>

          {/* Quizzes Taken Circle */}
          <div className="relative w-24 h-24 lg:w-32 lg:h-32">
            <svg className="w-24 h-24 lg:w-32 lg:h-32 transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="35" stroke="rgba(255,255,255,0.2)" strokeWidth="6" fill="none" />
              <circle
                cx="50"
                cy="50"
                r="35"
                stroke="white"
                strokeWidth="6"
                fill="none"
                strokeDasharray={`${40 * 2.2} 220`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-white font-bold text-lg lg:text-2xl">40%</div>
                <div className="text-purple-100 text-xs lg:text-sm">Quizzes</div>
                <div className="text-purple-100 text-xs lg:text-sm">Taken</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
