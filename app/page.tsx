import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="bg-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Branding and illustration */}
            <div className="text-white space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold">አይኮድ ኢትዮጵያ</h1>
                  <p className="text-sm text-gray-300">በመላሽ ይግቡ</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  ለሁሉም ዕድሜ ያላቸው እና ደረጃዎች ተስማሚ የሆነ ከፍተኛ ጥራት ያለው የመማሪያ ኮርሶች ያገኛሉ። እንዲሁም የተለያዩ ኮምፒውተር ፕሮግራሞች።
                </p>
              </div>

              {/* 3D Character illustration placeholder */}
              <div className="flex justify-center">
                <div className="relative">
                  <img src="/purple-cartoon-character.png" alt="3D Character" className="w-64 h-72 object-contain" />
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-32 h-8 bg-purple-500/20 rounded-full blur-sm"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Login form */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-2">ICODE ETHIOPIA ይግቡ</h2>
              </div>

              <LoginForm />

              <div className="text-center">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-1 h-px bg-gray-600"></div>
                  <span className="text-gray-400 text-sm">የተማሪ ቦታ</span>
                  <div className="flex-1 h-px bg-gray-600"></div>
                </div>

                <div className="flex justify-center gap-4">
                  <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-sm"></div>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-sm"></div>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
