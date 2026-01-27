import { CiCirclePlus } from "react-icons/ci";

export default function CreateNewBetCard() {
    return (
        <div className="h-40 w-80 bg-secondary-bg rounded-lg flex flex-col items-center p-4 m-2">
            <div className="flex space-x-2 my-auto">
                <CiCirclePlus className="text-4xl"/>
                <p className="font-bold my-auto">Create a new bet question</p>
            </div>
        </div>
    );
}