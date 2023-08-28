"use client"

import React, { FC } from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import * as z from "zod"

import { createFeedback } from "@/app/actions"

import { Button } from "../ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form"
import { Textarea } from "../ui/textarea"
import ToastBody from "./ToastBody"

const formSchema = z.object({
  content: z.string().max(1000).nonempty("Feedback is required."),
})

interface FeedbackFormProps {
  onOpenChange?: (value: boolean) => void
}
const FeedbackForm: FC<FeedbackFormProps> = ({ onOpenChange }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  })
  const { isValid } = form.formState

  const handleClose = () => {
    onOpenChange?.(false)
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { success, message } = await createFeedback(values)
    if (success) {
      toast.success(<ToastBody title="Success" message="Feedback created." />)
      form.reset()
      handleClose()
    } else {
      toast.error(
        <ToastBody title="Error" message="Feedback creation failed." />
      )
    }
  }
  return (
    <div className="flex flex-col gap-3">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-3"
        >
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="bg-background min-w-[240px]"
                    placeholder="Enter any feedback..."
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={!isValid} className="m-0">
            Submit
          </Button>
        </form>
      </Form>
      <Link
        href="/feedback"
        className="flex flex-col items-stretch"
        onClick={handleClose}
      >
        <Button variant="ghost">See all feedback</Button>
      </Link>
    </div>
  )
}

export default FeedbackForm
