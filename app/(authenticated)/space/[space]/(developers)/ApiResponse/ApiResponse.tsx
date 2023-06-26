import React, { FC } from "react"

import InnerCode from "./InnerCode"

interface ApiResponseProps {
  loading: boolean
}

/* @ts-expect-error Server Component */
const ApiResponse: FC<ApiResponseProps> = async ({ loading = false }) => {
  const res = await fetch(`http://localhost:3000/api/experiments/flags`)
  const flags = await res.json()
  return (
    <div className="border rounded-xl bg-muted">
      {flags && <InnerCode flags={flags} loading={loading} />}
    </div>
  )
}

export default ApiResponse
