import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ModeToggle } from '@/components/ModeToggle'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">{children}</Link>
  )
}

function MainNav() {
  return (
    <nav className="flex items-center space-x-6 pl-3">
      <NavLink href="/inventory">Add thing</NavLink>
      <NavLink href="/inventory">How to use</NavLink>
    </nav>
  )
}

function Search() {
  return (
    <div>
      <Input type="search" placeholder="Search inventory…" className="w-[300px] lg:w-[450px]" />
    </div>
  )
}

function CreateThingCard() {
  return (
    <Card className="w-[800px]">
      <CardHeader>
        <CardTitle className="text-2xl">Create item</CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Item name" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Create item</Button>
      </CardFooter>
    </Card>
  )
}

export default function IventoryTestPage() {
  return (
    <>
      <div className="border-b">
        <div className="flex flex-row h-16 items-center px-4">
          <div className="flex-1">
            <MainNav />
          </div>
          <Search />
          <div className="flex-1 flex flex-row justify-end">
            <ModeToggle />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center p-6">
        <CreateThingCard />
      </div>
    </>
  )
}
