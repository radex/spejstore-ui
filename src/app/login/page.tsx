import { Separator } from '@/components/ui/separator'
import { ProfileForm } from './comp'

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-medium">spejstore-ui</h1>
      </div>
      <Separator />
      <ProfileForm />
    </div>
  )
}
