export default function Loading() {
    return (
        <div className="absolute top-0 left-0 w-full h-full bg-background hidden place-items-center z-[1] before:content-[''] before:h-16 before:w-16 before:border-4 before:border-backgroundOn before:border-t-transparent before:rounded-circle before:animate-loading">
        </div>
    )
}