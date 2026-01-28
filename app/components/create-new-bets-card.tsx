import { CiCirclePlus } from "react-icons/ci";
import BetCardContainer from "./bet-card-container";

export default function CreateNewBetCard() {
    return (
        <BetCardContainer>
            <div className="flex space-x-2 my-auto">
                <CiCirclePlus className="text-4xl"/>
                <p className="font-bold my-auto">Create a new bet question</p>
            </div>
        </BetCardContainer>
    );
}