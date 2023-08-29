import React from "react"
import { X } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"

const values = ["a", "b", "c", "d"]
const colors = ["#7B61FF", "#EA7E00", "#E82A4A", "#0086EA"]

const VariantSelect = ({ setValue, name, watch, required }: any) => {
  const handleAdd = () => {
    setValue("variants", [{ id: "a", weight: 0.5 }])
    addVariant()
  }

  const variants = watch(name)
  const handleRemove = () => {
    setValue("variants", variants.slice(0, -1))
    removeVariant()
  }

  const addVariant = () => {
    const totalVariants: number = variants.length + 1
    const newWeight = Number((1 / totalVariants).toFixed(4))
    const newVariant = {
      id: String.fromCharCode(96 + totalVariants),
      weight: newWeight,
    }
    const updatedVariants = [...variants, newVariant].map((v) => ({
      ...v,
      weight: newWeight,
    }))
    setValue("variants", updatedVariants)
  }

  const removeVariant = () => {
    const totalVariants: number = variants.length - 1
    const newWeight = Number((1 / totalVariants).toFixed(4))

    const updatedVariants = variants.slice(0, -1).map((v: any) => ({
      ...v,
      weight: newWeight,
    }))
    setValue("variants", updatedVariants)
  }

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-medium">
        Variants
      </label>
      <div className="flex gap-2 justify-start">
        {variants.map((v: any, idx: any) => {
          return (
            <VariantTag variant={v} idx={idx} handleRemove={handleRemove} />
          )
        })}
        {variants.length < 4 && (
          <button onClick={handleAdd}>
            <Icons.pluscircle className="transition duration-100 opacity-50 hover:opacity-100" />
          </button>
        )}
      </div>
    </div>
  )
}

export default VariantSelect

const VariantTag = ({ variant, idx, handleRemove }: any) => {
  const { id, weight } = variant
  return (
    <div className="relative">
      <TagRaw id={id} weight={weight} idx={idx} />
      {idx > 0 && (
        <div
          className="bg-pearl aspect-square rounded-full absolute -top-2 -right-2 w-5 shrink-0 flex items-center justify-center  cursor-pointer z-10 text-sm border bg-background"
          onClick={() => handleRemove()}
        >
          <X height="12px" />
        </div>
      )}
    </div>
  )
}

const TagRaw = ({ id, weight, idx }: any) => {
  return (
    <Badge className="whitespace-nowrap cursor-default w-20 text-center flex justify-center">
      {String(id)[0].toUpperCase()} {weight * 100}%
    </Badge>
  )
}

export const VariantView = ({ variants }: any) => {
  return (
    <div className="flex gap-2">
      {variants.map((v: any, idx: any) => (
        <TagRaw id={v.id} weight={v.weight} idx={idx} />
      ))}
    </div>
  )
}
