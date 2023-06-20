import React, { FC } from "react"
import Image from "next/image"
import { Loader2, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Text from "@/components/uplift/text"
import Title from "@/components/uplift/title"

interface ImageUploadFieldProps {
  isUploading: boolean
  imageUrl: string
  [x: string]: any
}

const ImageUploadField: FC<ImageUploadFieldProps> = ({
  isUploading,
  imageUrl,
  ...props
}) => {
  return (
    <>
      <div
        {...props}
        className={cn(
          "relative aspect-video border border-dashed rounded-md group flex items-center justify-center cursor-pointer transition duration-100 hover:bg-muted/40 overflow-hidden",
          imageUrl && "border-solid"
        )}
      >
        {isUploading && (
          <div>
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        )}
        {!isUploading && !imageUrl && <Placeholder />}
        {imageUrl && (
          <Image
            src={imageUrl}
            style={{ objectFit: "cover" }}
            alt="image"
            fill={true}
          />
        )}
        {imageUrl && (
          <>
            <Button
              variant="outline"
              className="w-10 rounded-full p-0 absolute bottom-2 right-2 bg-background"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Add</span>
            </Button>
          </>
        )}
      </div>
    </>
  )
}

export default ImageUploadField

const Placeholder = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative ">
        <img
          src="image-placeholder.svg"
          alt=""
          className="relative w-32 overflow-hidden rounded-lg z-10 transition duration-300 group-hover:-translate-y-4 group-hover:scale-105"
        />
        <img
          src="image-placeholder.svg"
          alt=""
          className="absolute top-0 left-0 w-32 overflow-hidden rounded-lg transition duration-300 group-hover:-translate-x-1/2 group-hover:-rotate-12 opacity-50 group-hover:scale-95"
        />
        <img
          src="image-placeholder.svg"
          alt=""
          className="absolute top-0 left-0 w-32 overflow-hidden rounded-lg transition duration-300 group-hover:translate-x-1/2 group-hover:rotate-12 opacity-50 group-hover:scale-95"
        />
      </div>
      <div>
        <Title size="t6">Drag and drop or click to upload</Title>
        <Text className="text-muted-foreground">
          Supports JPG, PNG up to 10mb
        </Text>
      </div>
    </div>
  )
}
