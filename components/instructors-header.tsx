import { Users } from "lucide-react"

export function InstructorsHeader() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold text-white">Icode Instructors</h1>
      <Users className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
    </div>
  )
}
