import Button from "@/app/components/button";
import { MdError } from "react-icons/md";

export default function ErrorState({setHasSubmitted}: {setHasSubmitted: (hasSubmitted: boolean) => void}) {
    return (
        <div className="mx-auto flex flex-col gap-6 items-center">
            <MdError size={96}/>
            <p className="text-lg">An error occurred while creating your account.</p>
            <Button 
                className="p-2 rounded-md bg-secondary-button hover:bg-secondary-button-hover transition mx-auto"
                onClick={() => setHasSubmitted(false)}
            >
                    Try Again
            </Button>
        </div>
    );
}