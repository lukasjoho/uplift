import { FC } from "react"
import { motion } from "framer-motion"

interface ModalOverlayProps {
  handleModalBackgroundClick: (e: any) => void
}

const ModalOverlay: FC<ModalOverlayProps> = ({
  handleModalBackgroundClick,
}: any) => {
  return (
    <motion.div
      className="w-screen h-screen bg-background/80 backdrop-blur-sm fixed top-0 left-0"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
      exit={{
        opacity: 0,
      }}
      onClick={(e: any) => handleModalBackgroundClick(e)}
    />
  )
}

export default ModalOverlay
