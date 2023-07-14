import { Metadata } from "next"


export const metadata: Metadata = {
  title: "Login",
  description: "Login",
}

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0 justify-center items-center h-screen">
        <div className="flex-1 lg:max-w-2xl">{children}</div>
      </div>
    </>
  )
}
