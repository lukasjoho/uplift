"use client"

import React from "react"

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

const ApiResponseWindow = async () => {
  const res = await fetch(`http://localhost:3000/api/experiments/flags`)
  const flags = await res.json()
  return (
    <div>
      {flags && (
        // <SyntaxHighlighter language="json" style={materialOceanic}>
        //   {JSON.stringify(flags, null, 2)}
        // </SyntaxHighlighter>
        <pre
          className="border rounded-xl bg-muted"
          dangerouslySetInnerHTML={{
            __html: syntaxHighlight(JSON.stringify(flags, undefined, 4)),
          }}
        />
      )}
    </div>
  )
}

export default ApiResponseWindow
