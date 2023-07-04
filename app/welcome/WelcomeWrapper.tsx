"use client"

import React, { createContext, useState } from "react"

import SpacesManager from "../(authenticated)/spaces/components/SpacesManager"
import StageWrapper from "./StageWrapper"
import WelcomeMessage from "./WelcomeMessage"

export const WelcomeContext = createContext({
  stage: "message",
  setStage: (stage: string) => {},
})

const WelcomeWrapper = ({ spacesManager, children }: any) => {
  const [stage, setStage] = useState("message")

  return (
    <WelcomeContext.Provider value={{ stage, setStage }}>
      <div className="w-screen grow flex justify-center items-center">
        {stage == "message" && <WelcomeMessage />}
        {stage == "space" && (
          <StageWrapper>
            {/* @ts-ignore */}
            {/* <SpacesManager /> */}
          </StageWrapper>
        )}
      </div>
    </WelcomeContext.Provider>
  )
}

export default WelcomeWrapper
