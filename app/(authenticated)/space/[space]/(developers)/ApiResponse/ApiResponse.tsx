import React, { FC } from "react"

import InnerCode from "./InnerCode"

interface ApiResponseProps {
  loading: boolean
}

/* @ts-expect-error Server Component */
const ApiResponse: FC<ApiResponseProps> = async ({ loading = false }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST_URL}/api/experiments/flags`,
    {
      cache: "no-store",
    }
  )
  const flags = await res.json()
  return (
    <div className="border rounded-xl bg-muted">
      {flags && <InnerCode flags={flags} loading={loading} />}
    </div>
  )
}

export default ApiResponse
