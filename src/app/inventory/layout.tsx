import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inventory Test',
  description: 'Inventory Test',
}

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex-1">{children}</div>
      </div>
    </>
  )
}
