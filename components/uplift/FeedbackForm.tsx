"use client"

import React from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { createFeedback } from "@/app/actions"

import { Button } from "../ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form"
import { Textarea } from "../ui/textarea"

const formSchema = z.object({
  content: z.string().max(1000).nonempty("Feedback is required."),
})

const FeedbackForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  })
  const { isValid } = form.formState

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    await createFeedback(values)
    console.log(values)
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
      <Link href="/feedback" className="flex flex-col items-stretch">
        <Button variant="ghost">See all feedback</Button>
      </Link>
    </div>
  )
}

export default FeedbackForm
