import SpinnerMini from "./SpinnerMini";

export default function Fallback() {
    return (
        <div className="flex items-center gap-x-4 justify-center my-12 mx-auto w-full">
            <span className="text-secondary-500 animate-pulse">
                Loading the Cars for you
            </span>
            <SpinnerMini />
        </div>
    )
}