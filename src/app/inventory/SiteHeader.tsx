'use client'

import * as React from 'react'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ModeToggle'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import { cn } from '@/lib/utils'
import { Crosshair1Icon } from '@radix-ui/react-icons'

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
      {/* <NavLink href="/inventory">
        <Crosshair1Icon className="h-6 w-6" />
        <span className="text-foreground font-bold text-base">Inventory</span>
      </NavLink> */}
      <Link href="/" className="flex items-center space-x-2">
        <Crosshair1Icon className="h-6 w-6" />
        <span className="font-bold">Inventory</span>
      </Link>
      <NavLink href="/inventory">Add thing</NavLink>
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
              'relative justify-start text-sm font-normal text-muted-foreground w-fit sm:w-[200px] md:w-[300px] lg:w-[450px]',
            )}
          >
            <span className="hidden md:inline-flex">Search Hackerspace...</span>
            <span className="inline-flex md:hidden">Search...</span>
            <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-screen sm:w-[450px]" sideOffset={-40}>
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

export default function SiteHeader() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur flex flex-row justify-center">
      <div className="flex-1 flex flex-row h-16 items-center px-4 max-w-[1280px]">
        <div className="flex-1">
          <MainNav />
        </div>
        <Search />
        <div className="lg:flex-1 pl-4 flex flex-row justify-end">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
