import Navbar from "./components/navbar";
import BetCard from "./components/bet-card";
import {BETS} from "./constants";

const betCards = BETS.map((bet, index) => (
    <BetCard key={index} bet={bet} />
));

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className='mt-10 m-auto w-5/6 items-center justify-center flex columns-4 flex-wrap'>
        {betCards}
      </div>
    </div>
  );
}
