import BetCard from "./components/bet-card";
import {BETS} from "./constants";

export default function Home() {
  
  const betCards = BETS.map((bet, index) => (
    <BetCard key={index} bet={bet} />
  ));

  return (
    <div className='my-10 m-auto w-5/6 items-center justify-center flex columns-4 flex-wrap'>
      {betCards}
    </div>
  );
}
