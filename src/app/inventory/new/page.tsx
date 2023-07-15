import * as React from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import ContentCard from '@/components/ContentCard'
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

export default function InventoryNewPage() {
  return (
    <ContentCard>
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
            <PopoverContent className="p-0 w-full sm:w-[400px]">
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
    </ContentCard>
  )
}
