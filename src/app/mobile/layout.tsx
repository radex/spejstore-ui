import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inventory Mobile Test',
  description: 'Inventory Mobile Test',
}

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return <>{children}</>
}
