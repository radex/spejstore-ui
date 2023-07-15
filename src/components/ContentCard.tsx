import { Card } from '@/components/ui/card'

export default function ContentCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row justify-center py-6 px-2">
      <Card className="w-full md:w-[750px] xl:w-[900px]">{children}</Card>
    </div>
  )
}
