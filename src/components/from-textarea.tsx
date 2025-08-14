"use client"

import { Textarea } from "@/components/ui/textarea"
import { forwardRef, SetStateAction } from "react"


interface FromTextAreaProps {
    fromText: string,
    setFromText: (text: string) => void
    onFocus?: () => void
}

export const FromTextarea = forwardRef<HTMLTextAreaElement, FromTextAreaProps>(({ fromText, setFromText, onFocus }, ref) => {
    return <Textarea
        name="fromText"
        id="fromText"
        placeholder="Entrez votre texte ici"
        className="w-full md:w-1/2 bg-brand-nearWhite h-32 md:mr-4"
        value={fromText}
        onChange={(e) => setFromText(e.target.value)}
        onFocus={onFocus}
        ref={ref}
    />
})

