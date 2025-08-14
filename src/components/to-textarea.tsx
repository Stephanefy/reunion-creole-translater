"use client"

import { Textarea } from "@/components/ui/textarea"
import { LoadingDots } from "@/components/loading-dots"

const ToTextarea = ({ toText, setToText, isLoading }: { toText: string, setToText: (text: string) => void, isLoading: boolean }) => {

  if (isLoading) {
    return <div className="
    flex items-center justify-center 
    w-1/2 h-32 bg-brand-nearWhite rounded-md
    border-2 
    border-brand-azure mr-0">
      <LoadingDots />
    </div>
  }

  return <Textarea
    name="toText"
    id="toText"
    placeholder="Résultat en créole"
    className="w-full md:w-1/2 h-32 bg-brand-nearWhite mr-0"
    value={toText}
    onChange={(e) => setToText(e.target.value)}
  />
}

export default ToTextarea;