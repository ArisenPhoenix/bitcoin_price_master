import Image from "next/image";
import coingGecko from "../media/CoinGecko.png";
import css from "./index.module.css";
import Card from "../Components/UI/Card/Card";

const Landing = () => {
  return (
    <Card className={css.attributionDiv}>
      <h5>Powered By</h5>
      <Image src={coingGecko} alt="Coin Gecko" />
    </Card>
  );
};

export default Landing;
