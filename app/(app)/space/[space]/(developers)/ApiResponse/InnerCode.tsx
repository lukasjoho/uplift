"use client"

import React, { FC } from "react"

import { Skeleton } from "@/components/ui/skeleton"
import Text from "@/components/uplift/text"

export function syntaxHighlight(json: any) {
  if (!json) return "" //no JSON from response

  json = json.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    function (match: any) {
      var cls = "number"
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = "key"
        } else {
          cls = "string"
        }
      } else if (/true|false/.test(match)) {
        cls = "boolean"
      } else if (/null/.test(match)) {
        cls = "null"
      }
      return '<span class="' + cls + '">' + match + "</span>"
    }
  )
}

interface InnerCodeProps {
  flags: any
  loading: boolean
}

const InnerCode: FC<InnerCodeProps> = ({ flags, loading }) => {
  return (
    <div>
      <div className="h-7 border-b flex justify-between items-center px-4">
        <Text className="text-muted-foreground text-xs">Response</Text>
        <RealtimeLabel />
      </div>
      <div className="min-h-[256px] w-full px-4 py-4">
        {!loading && (
          <pre
            dangerouslySetInnerHTML={{
              __html: syntaxHighlight(JSON.stringify(flags, undefined, 4)),
            }}
          />
        )}

        {loading && (
          <div className="space-y-2">
            <Skeleton className="w-32 h-6 rounded-full bg-muted-foreground" />
            <Skeleton className="relative left-8 w-48 h-6 rounded-full bg-muted-foreground" />
            <Skeleton className="relative left-16 w-48 h-6 rounded-full bg-muted-foreground" />
            <Skeleton className="relative left-16 w-48 h-6 rounded-full bg-muted-foreground" />
            <Skeleton className="relative left-8 w-48 h-6 rounded-full bg-muted-foreground" />
            <Skeleton className="w-32 h-6 rounded-full bg-muted-foreground" />
          </div>
        )}
      </div>
    </div>
  )
}

export default InnerCode

const RealtimeLabel = () => {
  return (
    <div className="flex items-center gap-1">
      <Text className="text-xs text-green-500">Realtime</Text>
      <div className="h-2 aspect-square rounded-full bg-green-500" />
    </div>
  )
}
