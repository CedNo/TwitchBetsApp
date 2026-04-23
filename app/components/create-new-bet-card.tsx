import { CiCirclePlus } from "react-icons/ci";
import BetCardContainer from "./bet-card-container";
import Link from "next/dist/client/link";

export default function CreateNewBetCard() {
    return (
        <Link href="/bet/question/new">
        <BetCardContainer>
            <div className="flex space-x-2 my-auto">
                <CiCirclePlus className="text-4xl"/>
                <p className="font-bold my-auto">Create a new bet question</p>
            </div>
        </BetCardContainer>
        </Link>
    );
}