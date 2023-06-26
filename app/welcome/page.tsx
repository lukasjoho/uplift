"use client"

import React, { useState } from "react"

import Title from "@/components/uplift/title"

const WelcomePage = () => {
  const [stage, setStage] = useState("welcome")
  return (
    <div className="w-screen grow flex justify-center items-center">
      {/* {stage == "welcome" && <WelcomeMessage />} */}
      <Title>Welcome to Uplift</Title>
    </div>
  )
}

export default WelcomePage
