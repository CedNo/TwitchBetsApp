import Navbar from "./components/navbar";
import Footer from "./components/footer";
import BetCard from "./components/bet-card";
import {BETS} from "./constants";

const betCards = BETS.map((bet, index) => (
    <BetCard key={index} bet={bet} />
));

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar/>
      <div className='my-10 m-auto w-5/6 items-center justify-center flex columns-4 flex-wrap'>
        {betCards}
      </div>
      <Footer/>
    </div>
  );
}
