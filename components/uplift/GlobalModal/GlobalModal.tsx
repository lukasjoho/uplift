"use client"

import React, { FC, useContext, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"

import { useWindowSize } from "@/lib/hooks"

import Title from "../title"
import BottomSheet from "./BottomSheet"
import CenterModal from "./CenterModal"
import ModalOverlay from "./ModalOverlay"
import useFixBackground from "./hooks/useFixBackground"

export const ModalContext = React.createContext([
  false,
  (arg: any) => {
    return arg
  },
])

export const openModal = () => {
  const [, setIsOpen] = useContext(ModalContext)
  // @ts-ignore
  setIsOpen(true)
}

const callAll =
  (...fns: any) =>
  (...args: any) =>
    fns.forEach((fn: any) => fn && fn(...args))

function Modal(props: any) {
  const [isOpen, setIsOpen] = React.useState(false)

  return <ModalContext.Provider value={[isOpen, setIsOpen]} {...props} />
}

function ModalDismissButton({ children: child }: any) {
  const [setIsOpen] = React.useContext(ModalContext)
  return React.cloneElement(child, {
    //@ts-ignore/
    onClick: callAll(() => setIsOpen(false), child.props.onClick),
  })
}

function ModalOpenButton({ children: child }: any) {
  const [, setIsOpen]: any = React.useContext(ModalContext)

  return React.cloneElement(child, {
    //@ts-ignore/
    onClick: callAll(() => {
      // You now have access to `window`
      //@ts-ignore
      setIsOpen(true)
    }, child.props.onClick),
  })
}

function ModalContents({ title, children: child, size, ...props }: any) {
  const [isOpen, setIsOpen] = React.useContext(ModalContext)
  useFixBackground(isOpen)

  const handleClose = () => {
    //@ts-ignore
    setIsOpen(false)
  }
  const handleModalBackgroundClick = (e: any) => {
    handleClose()
    e.preventDefault()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed w-screen h-screen left-0 top-0 z-50 grid">
          <ModalOverlay
            handleModalBackgroundClick={handleModalBackgroundClick}
          />
          <ModalBody size={size}>
            <ModalHeader title={title} handleClose={handleClose} />
            {React.cloneElement(child, {
              handleClose: handleClose,
            })}
          </ModalBody>
        </div>
      )}
    </AnimatePresence>
  )
}
interface ModalOpenProps {
  title: string
  handleClose: () => void
}
const ModalHeader: FC<ModalOpenProps> = ({ title, handleClose }) => {
  return (
    <div className="flex justify-between items-start gap-4 relative">
      <Title size="t4">{title}</Title>
      <div
        onClick={() => handleClose()}
        className="cursor-pointer rounded-sm opacity-70 transition-opacity hover:opacity-100"
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </div>
    </div>
  )
}

const ModalBody = ({ children, size }: any) => {
  const [setIsOpen] = React.useContext(ModalContext)
  return (
    <>
      <div className="hidden md:grid">
        <CenterModal>{children}</CenterModal>
      </div>
      <div className="md:hidden w-full">
        <BottomSheet size={size}>{children}</BottomSheet>
      </div>
    </>
  )
}

export { Modal, ModalOpenButton, ModalContents, ModalDismissButton }
