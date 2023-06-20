"use client"

import React, { createContext, useState } from "react"

import WalkthroughItem from "./WalkthroughItem"
import WalkthroughNav from "./WalkthroughNav"
import { items } from "./items"

export const WalkthroughContext = createContext({
  activeStep: 0,
  setActiveStep: (step: number) => {},
})
const { Provider } = WalkthroughContext

const WalkthroughBody = () => {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <div>
      <Provider value={{ activeStep, setActiveStep }}>
        <WalkthroughNav activeStep={activeStep} />
        <div className="pt-16 md:pt-32 space-y-24 md:space-y-48">
          {items.map((item, idx) => {
            return (
              <WalkthroughItem
                item={item}
                orientation={idx % 2 === 0 ? "left" : "right"}
              />
            )
          })}
        </div>
      </Provider>
    </div>
  )
}

export default WalkthroughBody
