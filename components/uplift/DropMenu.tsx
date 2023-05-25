import React from "react"
import Link from "next/link"

import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { Textarea } from "../ui/textarea"
import FeedbackForm from "./FeedbackForm"

const DropMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline" size="sm" className="text-sm">
          Feedback
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Feedback</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="p-2">
          <FeedbackForm />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropMenu
