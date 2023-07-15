import { Metadata } from 'next'
import SiteHeader from './SiteHeader'

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
      <div className="flex flex-row max-w-full">
        <div className="flex-1">
          <SiteHeader />
          {children}
        </div>
      </div>
    </>
  )
}
