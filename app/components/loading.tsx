import { FaRegHourglassHalf } from "react-icons/fa6";

export default function Loading({text} : {text: string}) {
    return (
        <div className="flex flex-col gap-2 items-center">
            <FaRegHourglassHalf className="text-5xl"/>
            <p className="text-3xl">{text}</p>
        </div>
    );
}