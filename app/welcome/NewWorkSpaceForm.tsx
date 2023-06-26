"use client"

import { useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { z } from "zod"

import { convertToLowercase } from "@/lib/helpers"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import ToastBody from "@/components/uplift/ToastBody"
import Text from "@/components/uplift/text"

const createWorkspace = async (values: any) => {
  const res = await fetch("/api/workspaces", {
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })
  return res
}

const formSchema = z.object({
  name: z.string().nonempty("Name required."),
  slug: z.string().nonempty("Slug required."),
})

const NewWorkspaceForm = ({ handleClose }: any) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      slug: "",
    },
  })
  const { isSubmitting } = form.formState
  const { isValid } = form.formState
  const watchedValue = form.watch("name")
  useEffect(() => {
    form.setValue("slug", convertToLowercase(watchedValue))
  }, [watchedValue])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // const res = await createExperiment(values)
    // const data = await res.json()
    // if (res.ok) {
    //   toast.success(<ToastBody title="Success" message="Experiment created." />)
    //   handleClose()
    // } else {
    //   toast.error(<ToastBody title="Failed" message={data.message} />)
    // }
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // await createFeedback(values)
  }

  return (
    <Form {...form}>
      {/* <pre>{JSON.stringify(form, null, 2)}</pre> */}
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter workspace name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="slug"
        render={({ field }) => (
          <FormItem>
            <FormLabel>URL</FormLabel>
            <FormControl>
              <div className="flex gap-2 items-center">
                <Text className="text-sm">
                  {process.env.NEXT_PUBLIC_HOST_URL + "/"}
                </Text>
                <Input placeholder="Your workspace URL" {...field} disabled />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <Button
        className="m-0"
        onClick={form.handleSubmit(onSubmit)}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating...
          </>
        ) : (
          "Create"
        )}
      </Button>
    </Form>
  )
}

export default NewWorkspaceForm
