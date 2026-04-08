import { MoonLoader } from "react-spinners";

export default function LoadingState() {
    return (
        <div className="mx-auto flex flex-col gap-6 items-center">
            <div className="mx-auto">
                <MoonLoader color="white"/>
            </div>
            <p className="text-lg">Creating the tools for your success...</p>
        </div>
    );
}