'use client'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  CaretSortIcon,
  ChevronLeftIcon,
  DotsHorizontalIcon,
  CheckIcon,
  SlashIcon,
} from '@radix-ui/react-icons'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { CommandList } from 'cmdk'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const members =
  'ar,arsenicum,cfk,daz,dfgg,drozdziak1,elia,emeryth,enki,gadzber,gawron52,kaneda_,kosa,liryk,mi,micky,mike,minikdo,nietaki,nuke,obst,palid,pl,q3k,qrde,radex,red_labs,rureq,sdomi,vuko,wrx,zuzu'.split(
    ',',
  )

const formSchema = z.object({
  parent: z.string(),
  name: z.string().min(2).max(50),
  description: z.string().max(512).optional(),
  owner: z.string().optional(),
})
type ItemFormValues = z.infer<typeof formSchema>

export default function InventoryMobileTest() {
  const { toast } = useToast()
  const [isDeleteConfirmOpen, setDeleteConfirmOpen] = React.useState(false)
  const [isOwnerPickerOpen, setOwnerPickerOpen] = React.useState(false)

  const form = useForm<ItemFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      parent: 'arcade',
      name: '',
    },
  })

  const onSubmit = (values: ItemFormValues) => {
    console.log(values)
    toast({
      title: 'Item saved',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <div className="w-full h-full lg:overflow-y-auto flex flex-row justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col w-full h-full lg:w-[800px] lg:h-auto lg:my-9 lg:rounded-xl lg:border bg-card text-card-foreground lg:shadow">
            <div className="h-14 border-b flex flex-row items-center px-3 space-x-3">
              <Button variant="outline" size="icon">
                <ChevronLeftIcon className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Toggle theme</span>
              </Button>
              <h1 className="flex-1 scroll-m-20 text-lg font-semibold tracking-tight">Edit item</h1>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <DotsHorizontalIcon className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">More</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    className="text-destructive"
                    onClick={() => setDeleteConfirmOpen(true)}
                  >
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <AlertDialog open={isDeleteConfirmOpen} onOpenChange={setDeleteConfirmOpen}>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete this item.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-destructive">Delete</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              <Button type="submit">Save</Button>
            </div>
            <div className="flex-1 overflow-x-hidden overflow-y-scroll touch-pan-y [-webkit-overflow-scrolling:touch] relative">
              <div className="p-3 space-y-6">
                <FormField
                  control={form.control}
                  name="parent"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      {/* <FormLabel>Parent</FormLabel> */}
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            'w-[300px] justify-between flex',
                            !field.value && 'text-muted-foreground',
                          )}
                        >
                          arcade
                          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                      <FormDescription>
                        warsztat ciężki → lewy regał paletowy → regał paletowy 1.3 → paleta okienna
                      </FormDescription>
                      {/* <FormDescription>Where is this item is located?</FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Item name" />
                      </FormControl>
                      {/* <FormDescription>Keep it short</FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="relative -mx-3">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Optional fields
                    </span>
                  </div>
                </div>
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      {/* <FormDescription>
                    Extra keywords for searchability, model name, rules of usage, etc.
                  </FormDescription> */}
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Extra keywords for searchability, model name, rules of usage, etc."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="owner"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Owner</FormLabel>
                      <FormControl>
                        <div className="flex-row space-x-3">
                          <Popover open={isOwnerPickerOpen} onOpenChange={setOwnerPickerOpen}>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                role="combobox"
                                className={cn(
                                  'w-[200px] justify-between',
                                  !field.value && 'text-muted-foreground',
                                )}
                              >
                                {field.value || 'Select owner'}
                                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="p-0 w-[calc(100vw-2*0.75rem)] ml-3 sm:w-[400px]">
                              <Command>
                                <CommandInput placeholder="Search members" />
                                <CommandEmpty>No member found.</CommandEmpty>
                                <CommandList className="max-h-52 overflow-y-auto">
                                  {members.map((member) => (
                                    <CommandItem
                                      key={member}
                                      value={member}
                                      onSelect={(value) => {
                                        field.onChange(value)
                                        setOwnerPickerOpen(false)
                                      }}
                                    >
                                      <CheckIcon
                                        className={cn(
                                          'mr-2 h-4 w-4',
                                          field.value === member ? 'opacity-100' : 'opacity-0',
                                        )}
                                      />
                                      {member}
                                    </CommandItem>
                                  ))}
                                </CommandList>
                              </Command>
                            </PopoverContent>
                          </Popover>
                          <Button
                            variant="outline"
                            onClick={() => {
                              field.onChange('radex')
                            }}
                          >
                            Me
                          </Button>
                        </div>
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="p-3 leading-7">
                Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui,
                non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et
                ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a,
                convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis.
                Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac
                turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum.
                Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend
                justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer
                lobortis quis, varius in, purus. Integer ultrices posuere cubilia Curae, Nulla ipsum
                dolor lacus, suscipit adipiscing. Cum sociis natoque penatibus et ultrices volutpat.
                Nullam wisi ultricies a, gravida vitae, dapibus risus ante sodales lectus blandit
                eu, tempor diam pede cursus vitae, ultricies eu, faucibus quis, porttitor eros
                cursus lectus, pellentesque eget, bibendum a, gravida ullamcorper quam. Nullam
                viverra consectetuer. Quisque cursus et, porttitor risus. Aliquam sem. In hendrerit
                nulla quam nunc, accumsan congue. Lorem ipsum primis in nibh vel risus. Sed vel
                lectus. Ut sagittis, ipsum dolor quam.
              </div>
            </div>
          </div>
          <div>&nbsp;</div>
          <Toaster />
        </form>
      </Form>
    </div>
  )
}
