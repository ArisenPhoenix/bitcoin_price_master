import Image from "next/image";
import coingGecko from "../media/CoinGecko.png";
import css from "./index.module.css";
import Card from "../Components/UI/Card/Card";
import { useUser } from "@auth0/nextjs-auth0/dist/frontend/use-user";
import { useEffect } from "react";
import Head from "next/head";
import retreive_user_data from "../Components/PriceDisplay/Funcs/handleData";

const Landing = () => {
  const { user } = useUser();
  useEffect(() => {
    if (!user) {
      retreive_user_data("IndexPageCall", null, null);
    }
  });

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
