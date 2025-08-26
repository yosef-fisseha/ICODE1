import { Button } from "@/components/ui/button"

export function SettingsHeader() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold text-white">Settings</h1>
      <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold">
        LOGOUT
      </Button>
    </div>
  )
}
