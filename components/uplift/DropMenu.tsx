"use client"

import React, { useState } from "react"
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
  const [open, setOpen] = useState(false)
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger>
        <Button variant="outline" size="sm" className="text-sm">
          Feedback
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Feedback</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="p-2">
          <FeedbackForm onOpenChange={setOpen} />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropMenu
