export function LoadingDots() {

    return <>
        <div
            className="h-2 w-2 rounded-full animate-pulse-dot mr-2 bg-brand-leafyGreen"
            style={{ animationDelay: "-0.4s" }}
        ></div>
        <div
            className="h-2 w-2 rounded-full animate-pulse-dot mr-2 bg-brand-leafyGreen"
            style={{ animationDelay: "-0.2s" }}
        ></div>
        <div
            className="h-2 w-2 rounded-full animate-pulse-dot mr-2 bg-brand-leafyGreen"
            style={{ animationDelay: "0s" }}
        ></div>
        <div
            className="h-2 w-2 rounded-full animate-pulse-dot mr-2"
            style={{ animationDelay: "0.2s" }}
        ></div>
        <div
            className="h-2 w-2 rounded-full animate-pulse-dot"
            style={{ animationDelay: "0.4s" }}
        ></div>
    </>
}