'use client'

import * as React from 'react'

import Link from 'next/link'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
// import { FormItem, FormLabel } from "@/components/ui/form"
import { ModeToggle } from '@/components/ModeToggle'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import { CaretSortIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils'
import { Textarea } from '@/components/ui/textarea'

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
    >
      {children}
    </Link>
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
  const [isOpen, setOpen] = React.useState(false)
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <div>
      {/* <Input type="search" placeholder="Search inventory…" className="w-[300px] lg:w-[450px]" /> */}
      <Popover open={isOpen} onOpenChange={setOpen} modal={true}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              'relative justify-start text-sm font-normal text-muted-foreground w-[200px] md:w-[300px] lg:w-[450px]',
            )}
          >
            <span className="hidden lg:inline-flex">Search inventory...</span>
            <span className="inline-flex lg:hidden">Search...</span>
            <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-[450px]" sideOffset={-40}>
          <Command>
            <CommandInput placeholder="Search inventory" />
            <CommandEmpty>No item found.</CommandEmpty>
            <CommandGroup>
              <CommandItem>duży biały regał</CommandItem>
              <CommandItem>kuchnia</CommandItem>
              <CommandItem>taśmla</CommandItem>
              <CommandItem>tokarka</CommandItem>
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}

function SiteHeader() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur flex flex-row justify-center">
      <div className="flex-1 flex flex-row h-16 items-center px-4 max-w-[1280px]">
        <div className="flex-1">
          <MainNav />
        </div>
        <Search />
        <div className="flex-1 flex flex-row justify-end">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

function CreateThingCard() {
  return (
    <Card className="w-full md:w-[750px] xl:w-[900px]">
      <CardHeader>
        <CardTitle className="text-2xl">Create item</CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Item name" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" placeholder="(optional) Item description" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="owner">Owner</Label>
          {/* <Input id="owner" placeholder="(optional) Item owner" /> */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                className={cn(
                  'w-[200px] justify-between',
                  // !field.value && "text-muted-foreground"
                )}
              >
                arsenicum
                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 w-[400px]">
              <Command>
                <CommandInput placeholder="Search users" />
                <CommandEmpty>No user found.</CommandEmpty>
                <CommandGroup>
                  <CommandItem>radex</CommandItem>
                  <CommandItem>palid</CommandItem>
                  <CommandItem>vuko</CommandItem>
                  <CommandItem>arsenicum</CommandItem>
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
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
      <SiteHeader />
      <div className="flex flex-row justify-center py-6 px-2">
        <CreateThingCard />
      </div>
      <div className="flex flex-row justify-center py-6 px-2">
        <Card className="w-full md:w-[750px] xl:w-[900px]">
          <CardHeader>
            <CardTitle>Hello</CardTitle>
          </CardHeader>
          <CardContent>
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <p key={i} className="leading-7 [&:not(:first-child)]:mt-6">
                  Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque
                  dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.
                  Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo
                  volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor.
                  Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris
                  nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing
                  wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla
                  sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus
                  orci luctus non, consectetuer lobortis quis, varius in, purus. Integer ultrices
                  posuere cubilia Curae, Nulla ipsum dolor lacus, suscipit adipiscing. Cum sociis
                  natoque penatibus et ultrices volutpat. Nullam wisi ultricies a, gravida vitae,
                  dapibus risus ante sodales lectus blandit eu, tempor diam pede cursus vitae,
                  ultricies eu, faucibus quis, porttitor eros cursus lectus, pellentesque eget,
                  bibendum a, gravida ullamcorper quam. Nullam viverra consectetuer. Quisque cursus
                  et, porttitor risus. Aliquam sem. In hendrerit nulla quam nunc, accumsan congue.
                  Lorem ipsum primis in nibh vel risus. Sed vel lectus. Ut sagittis, ipsum dolor
                  quam.{' '}
                </p>
              ))}
          </CardContent>
        </Card>
      </div>
    </>
  )
}
