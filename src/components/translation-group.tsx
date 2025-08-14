'use client'

import { useState, useRef } from "react";
import FromTextarea from "./from-textarea";
import ToTextarea from "./to-textarea";
import { Button } from "@/components/ui/button";
import { z, ZodError } from "zod";




const TranslationInputSchema = z.object({
    fromText: z.string().max(500, "Votre texte à traduire ne doit pas dépasser les 2000 caractères"),
});



export function TranslationGroup() {


    const translationInputRef = useRef<HTMLTextAreaElement>(null);

    const [fromText, setFromText] = useState("");
    const [toText, setToText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Array<ZodError> | null>(null);

    const sendPrompt = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const validatedInput = TranslationInputSchema.safeParse({ fromText });

        console.log(validatedInput);

        if (!validatedInput.success) {
            setError(JSON.parse(validatedInput.error.message));
            setIsLoading(false);
            return;
        }

        const response = await fetch("/api/gemini", {
            method: "POST",
            body: JSON.stringify({ fromText }),
        });
        const data = await response.json();
        setToText(data.text);
        // const data = await dummyPromise();
        setToText(data.text);
        setIsLoading(false);

    }

    const handleTextareaFocus = () => {
        setError(null);
        setFromText("");
        setToText("");
    };

    return (
        <section className="flex flex-col gap-4 w-full">
            <form onSubmit={sendPrompt} className="flex flex-col gap-4 w-full bg-brand-lightGrassGreen p-4 md:p-8 border-2 border-brand-leafyGreen rounded-lg box-shadow-lg">
                <div className="flex flex-col  space-y-4 md:space-y-0 md:flex-row justify-between">
                    <FromTextarea fromText={fromText} setFromText={setFromText} ref={translationInputRef} onFocus={handleTextareaFocus} />
                    <ToTextarea toText={toText} setToText={setToText} isLoading={isLoading} />
                </div>
                <div className="self-end">
                    <Button type="submit"
                        className="cursor-pointer bg-brand-azure w-full hover:bg-brand-leafyGreen hover:font-bold">Traduire</Button>
                </div>
            </form>
            {error && <p className="text-red-500">{error[0].message}</p>}
        </section>
    )
}