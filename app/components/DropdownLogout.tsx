"use client"

import React from "react"
import { LogOut } from "lucide-react"
import { signOut } from "next-auth/react"

import { DropdownMenuItem } from "@/components/ui/dropdown-menu"

const DropdownLogout = () => {
  return (
    <DropdownMenuItem onClick={() => signOut()}>
      <LogOut className="mr-2 h-4 w-4" />
      <span>Log out</span>
    </DropdownMenuItem>
  )
}

export default DropdownLogout
