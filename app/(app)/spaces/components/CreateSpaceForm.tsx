"use client"

import { useContext, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useForm, useWatch } from "react-hook-form"
import { toast } from "react-hot-toast"
import * as z from "zod"

import { convertToLowercase, convertToSlug, formatDate } from "@/lib/helpers"
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
import { ModalContext } from "@/components/uplift/GlobalModal/GlobalModal"
import ToastBody from "@/components/uplift/ToastBody"
import { revalidateServerPath } from "@/app/actions"

const createSpace = async (values: any) => {
  const res = await fetch("/api/spaces", {
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })
  return res
}

const formSchema: any = z.object({
  name: z.string().max(50).nonempty("Name required."),
  slug: z.string().max(1000).nonempty("Slug required."),
})

const CreateSpaceForm = ({ handleClose }: any) => {
  const [, setIsOpen]: any = useContext(ModalContext)

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "onBlur",
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      slug: "",
    },
  })

  const formValues = form.getValues()

  const { isSubmitting } = form.formState
  const watchedValue = form.watch("name")
  useEffect(() => {
    form.setValue("slug", convertToLowercase(watchedValue))
  }, [watchedValue])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    Object.keys(values).forEach((key) => {
      if (values[key] === "") {
        values[key] = null
      }
    })
    const res = await createSpace(values)
    const data = await res.json()
    if (res.ok) {
      toast.success(<ToastBody title="Success" message="Space created." />)
      revalidateServerPath("spaces")
      setIsOpen(false)
    } else {
      toast.error(<ToastBody title="Failed" message={data.message} />)
    }
  }

  return (
    <>
      <Form {...form}>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Space Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter space name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-12">
            <FormItem>
              <FormLabel>Space URL</FormLabel>
              <Input
                value={`https://uplift.app/space/${convertToSlug(
                  watchedValue
                )}`}
                disabled
              />
            </FormItem>
          </div>
        </div>
        <div className="mt-12 flex justify-end">
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
        </div>
      </Form>
    </>
  )
}

export default CreateSpaceForm
