import { MdCheckCircle } from "react-icons/md";

export default function SuccessfulState() {
    return (
        <div className="mx-auto flex flex-col gap-6 items-center">
            <MdCheckCircle size={96} />
            <p className="text-lg">Your account has been created successfully!</p>
        </div>
    );
}