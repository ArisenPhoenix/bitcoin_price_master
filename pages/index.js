import Image from "next/image";
import coingGecko from "../media/CoinGecko.png";
import css from "./index.module.css";
import Card from "../Components/UI/Card/Card";
import Head from "next/head";

const Landing = () => {
  return (
    <>
      <Card className={css.attributionDiv}>
        <Head>
          <title>Bitcoin Price Master</title>
        </Head>
        <h5>Powered By</h5>
        <Image src={coingGecko} alt="Coin Gecko" />
      </Card>
    </>
  );
};

export default Landing;
