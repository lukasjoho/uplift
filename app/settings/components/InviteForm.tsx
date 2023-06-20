"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import ToastBody from "@/components/uplift/ToastBody"
import Text from "@/components/uplift/text"
import Title from "@/components/uplift/title"

const formSchema = z.object({
  email: z
    .string()
    .email("This is not a valid email.")
    .nonempty("Email is required."),
})

export function InviteForm() {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })
  const { isValid } = form.formState

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    const res = await fetch("/api/invite", {
      method: "POST",
      body: JSON.stringify({ email: values.email }),
    })
    setIsLoading(false)
    form.reset()
    if (res.status === 201) {
      toast.success(
        <div>
          <Title size="t6">Invite successful</Title>
          <Text>Email sent.</Text>
        </div>
      )
      router.refresh()
    }
    if (res.status === 409) {
      if (res.statusText === "user-exists") {
        toast.error(
          <div>
            <Title size="t6">Invite Failed</Title>
            <Text>User already exists.</Text>
          </div>
        )
      }
      if (res.statusText === "user-invited") {
        toast.error(
          <div>
            <Title size="t6">Invite Failed</Title>
            <Text>User was already invited.</Text>
          </div>
        )
      }
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-2 items-start"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="text" placeholder="Enter email..." {...field} />
              </FormControl>
              <FormMessage className="absolute" />
            </FormItem>
          )}
        />
        <Button type="submit" className="m-0">
          {isLoading && (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending...
            </>
          )}
          {!isLoading && "Invite"}
        </Button>
      </form>
    </Form>
  )
}
