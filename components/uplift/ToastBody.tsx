import React, { FC } from "react"

import Text from "./text"
import Title from "./title"

interface ToastBodyProps {
  title: string
  message?: string
}

const ToastBody: FC<ToastBodyProps> = ({ title, message }) => {
  return (
    <div>
      <Title size="t6">{title}</Title>
      {message && <Text>{message}</Text>}
    </div>
  )
}

export default ToastBody
