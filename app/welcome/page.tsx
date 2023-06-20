"use client"

import React, { useState } from "react"

import Title from "@/components/uplift/title"

import WelcomeMessage from "./WelcomeMessage"
import Workspaces from "./Workspaces"

const WelcomePage = () => {
  const [stage, setStage] = useState("welcome")
  return (
    <div className="w-screen grow flex justify-center items-center">
      {/* {stage == "welcome" && <WelcomeMessage />} */}
      {/* <Workspaces /> */}
      <Title>Welcome to Uplift</Title>
    </div>
  )
}

export default WelcomePage
