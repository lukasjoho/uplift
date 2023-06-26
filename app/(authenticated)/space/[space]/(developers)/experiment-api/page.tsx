import React, { Suspense } from "react"

import ApiResponse from "../ApiResponse"
import DevelopersLayout from "../DevelopersLayout"

const ExperimentAPI = () => {
  return (
    <DevelopersLayout pageTitle="Experiment API">
      <Suspense fallback={<ApiResponse loading={true} />}>
        {/* @ts-ignore */}
        <ApiResponse />
      </Suspense>
    </DevelopersLayout>
  )
}

export default ExperimentAPI
