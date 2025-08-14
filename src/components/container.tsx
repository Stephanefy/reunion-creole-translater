export default function Container({ children, className }: { children: React.ReactNode, className?: string }) {
    return <div className={`w-max-md md:w-max-xl font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ${className}`}>
        <main className="w-full md:w-8/12 mx-auto flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            {children}
        </main>
    </div>;
}       