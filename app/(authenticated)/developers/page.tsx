import React from "react"

import Title from "@/components/uplift/title"
import Container from "@/app/components/Container"
import { Tab, TabsList } from "@/app/releases/ReleaseToggle"

import ApiResponseWindow from "./ApiResponseWindow"

const ExperimentAPI = () => {
  return (
    <div>
      <Container>
        <Title>Experiment API</Title>
        {/* @ts-ignore */}
        <ApiResponseWindow />
      </Container>
    </div>
  )
}

export default ExperimentAPI
