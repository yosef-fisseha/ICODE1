import { DashboardLayout } from "@/components/dashboard-layout"
import { SettingsHeader } from "@/components/settings-header"
import { ProfileCard } from "@/components/profile-card"
import { LanguageSettings } from "@/components/language-settings"

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <SettingsHeader />
        <ProfileCard />
        <LanguageSettings />
      </div>
    </DashboardLayout>
  )
}
