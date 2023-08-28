"use client"

import { FC, createContext, useContext, useEffect, useState } from "react"
import { revalidatePath } from "next/cache"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  CalendarClock,
  CalendarIcon,
  FilePieChart,
  Globe,
  LineChart,
  Loader2,
  PenTool,
  Sparkles,
} from "lucide-react"
import { useForm, useWatch } from "react-hook-form"
import { toast } from "react-hot-toast"
import * as z from "zod"

import { convertToLowercase, formatDate } from "@/lib/helpers"
import { cn } from "@/lib/utils"
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
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import { ComboboxDemo } from "@/components/uplift/ComboBox"
import ComboInput from "@/components/uplift/ComboInput"
import { ModalContext } from "@/components/uplift/GlobalModal/GlobalModal"
import ToastBody from "@/components/uplift/ToastBody"
import Text from "@/components/uplift/text"
import Title from "@/components/uplift/title"
import FileInput from "@/app/(authenticated)/space/[space]/dashboard/components/CreateExperimentForm/FileInput"
import { revalidateServerPath } from "@/app/actions"

import ImageUploadField from "./ImageUploadField"
import RefineHypothesis from "./RefineHypothesis"
import RefineResult from "./RefineResult"
import VariantSelect from "./VariantSelect"

const createExperiment = async (values: any) => {
  const res = await fetch("/api/experiments", {
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })
  return res
}

const updateExperiment = async (data: any) => {
  const res = await fetch("/api/experiments", {
    body: JSON.stringify(data),
    method: "PUT",
  })
  revalidateServerPath("space/uplift/dashboard")
  return res
}

const deleteExperiment = async (id: string) => {
  const res = await fetch(`/api/experiments?id=${id}`, {
    method: "DELETE",
  })
  revalidateServerPath("space/uplift/dashboard")
  return res
}

const objectSchema = z.object({
  id: z.string(),
  weight: z.number(),
})

const urlSchema = z.string().refine((value) => {
  if (!value) return true // Allow empty value
  try {
    new URL(value)
    return true
  } catch (error) {
    return false
  }
}, "Must be a valid URL")

const formSchema: any = z.object({
  name: z.string().nonempty("Title required."),
  identifier: z.string().max(1000).nonempty("Identifier required."),
  hypothesis: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  variants: z.array(objectSchema),
  deployUrl: urlSchema,
  dashboardUrl: urlSchema,
  evaluationUrl: urlSchema,
  designUrl: urlSchema,
  cover: z.string(),
})

export const HypothesisContext = createContext({
  answer: null,
  setAnswer: (answer: any) => {},
})

const CreateExperimentForm = ({ experiment, handleClose }: any) => {
  const [, setIsOpen]: any = useContext(ModalContext)
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "onBlur",
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: experiment?.name || "",
      identifier: experiment?.identifier || "exp-",
      hypothesis: experiment?.hypothesis || "",
      startDate: experiment?.startDate || new Date().toISOString(),
      endDate: experiment?.endDate || "",
      cover: experiment?.cover || "",
      dashboardUrl: experiment?.dashboardUrl || "",
      deployUrl: experiment?.deployUrl || "",
      evaluationUrl: experiment?.evaluationUrl || "",
      designUrl: experiment?.designUrl || "",
      variants: experiment?.variants || [
        {
          id: "a",
          weight: 0.5,
        },
        { id: "b", weight: 0.5 },
      ],
    },
  })

  const formValues = form.getValues()

  form.register("cover", {
    validate: (value) => value !== "" || "Cover image required",
  })
  const { isSubmitting } = form.formState
  const { isValid } = form.formState
  const watchedValue = form.watch("name")
  const watchedStartDate = form.watch("startDate")
  const watchedHypothesis = form.watch("hypothesis")
  useEffect(() => {}, [watchedHypothesis])
  useEffect(() => {
    form.setValue("identifier", "exp-" + convertToLowercase(watchedValue))
  }, [watchedValue])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    Object.keys(values).forEach((key) => {
      if (values[key] === "") {
        values[key] = null
      }
    })
    let res
    let successMessage

    if (experiment) {
      res = await updateExperiment({ id: experiment.id, ...values })
      successMessage = "Experiment updated."
    } else {
      res = await createExperiment(values)
      successMessage = "Experiment created."
    }

    const data = await res.json()
    if (res.ok) {
      toast.success(<ToastBody title="Success" message={successMessage} />)
      revalidateServerPath("space/uplift/dashboard")
      setIsOpen(false)
    } else {
      toast.error(<ToastBody title="Failed" message={data.message} />)
    }
  }
  const [answer, setAnswer] = useState(null)

  return (
    <>
      <HypothesisContext.Provider value={{ answer, setAnswer }}>
        <Form {...form}>
          {/* <pre>{JSON.stringify(form, null, 2)}</pre> */}
          <div className="grid grid-cols-4 gap-12">
            <div className="col-span-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-2">
              <FormField
                control={form.control}
                name="identifier"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Identifier</FormLabel>
                    <FormControl>
                      <Input placeholder="..." {...field} disabled />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-4">
              <FormField
                control={form.control}
                name="hypothesis"
                render={({ field }) => (
                  <FormItem>
                    <div className="w-full flex justify-between items-center">
                      <FormLabel>Hypothesis</FormLabel>
                      <RefineHypothesis value={watchedHypothesis} />
                    </div>
                    <FormControl>
                      <Textarea
                        className="bg-background min-w-[240px]"
                        placeholder="By doing X, we expect Y to happen because of Z."
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                    {answer && <RefineResult answer={answer} />}
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-4">
              <FormField
                control={form.control}
                name="cover"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cover Image</FormLabel>
                    <FormControl>
                      <FileInput setValue={form.setValue} value={field.value} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-4">
              <VariantSelect
                name="variants"
                setValue={form.setValue}
                watch={form.watch}
                required={true}
              />
            </div>
            <div className="col-span-2">
              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col grow shrink-0">
                    <FormLabel>Start Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full max-w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              formatDate(field.value)
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarClock className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={new Date(field.value)}
                          onSelect={(date) => {
                            console.log("SEL DATE", date)
                            const dateString = date?.toISOString()
                            console.log("SEL STR DATE", dateString)

                            field.onChange(dateString)
                          }}
                          // disabled={(date) =>
                          //   date < new Date() || date < new Date("1900-01-01")
                          // }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-2">
              <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col grow shrink-0">
                    <FormLabel>End Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              formatDate(field.value)
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarClock className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={new Date(field.value)}
                          onSelect={(date) => {
                            const dateString = date?.toISOString()
                            field.onChange(dateString)
                          }}
                          disabled={(date) => {
                            return (
                              date < new Date(watchedStartDate) ||
                              date < new Date("1900-01-01")
                            )
                          }}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-2">
              <FormField
                control={form.control}
                name="deployUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Deploy URL</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter deploy URL"
                        {...field}
                        icon={<Globe className="w-4 h-4" />}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-2">
              <FormField
                control={form.control}
                name="designUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Design URL</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter design URL"
                        {...field}
                        icon={<PenTool className="w-4 h-4" />}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-2">
              <FormField
                control={form.control}
                name="dashboardUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dashboard</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter dashboard URL"
                        {...field}
                        icon={<LineChart className="w-4 h-4" />}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-2">
              <FormField
                control={form.control}
                name="evaluationUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Evaluation</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter evaluation URL"
                        {...field}
                        icon={<FilePieChart className="w-4 h-4" />}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="mt-12">
            <SubmitButton
              className="m-0"
              onClick={form.handleSubmit(onSubmit)}
              disabled={isSubmitting}
              label={experiment ? "Update" : "Create"}
              loadingLabel={experiment ? "Updating..." : "Creating..."}
            />
            {experiment && <DeleteAlert id={experiment.id} />}
          </div>
        </Form>
      </HypothesisContext.Provider>
    </>
  )
}

export default CreateExperimentForm

const SubmitButton = (props: any) => {
  return (
    <Button {...props}>
      {props.isSubmitting && (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {props.loadingLabel}
        </>
      )}
      {!props.isSubmitting && props.label}
    </Button>
  )
}

interface DeleteAlertProps {
  id: string
}
const DeleteAlert: FC<DeleteAlertProps> = ({ id }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button variant="destructive">Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Experiment</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently the experiment.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-500 hover:bg-red-600 text-white"
            onClick={() => deleteExperiment(id)}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
