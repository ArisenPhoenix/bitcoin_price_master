import Image from "next/image";
import coingGecko from "../media/CoinGecko.png";
import css from "./index.module.css";
import Card from "../Components/UI/Card/Card";
import { useUser } from "@auth0/nextjs-auth0/dist/frontend/use-user";
import basic_user_profile from "../Helpers/basic_user_profile";
import { SaveToStorage } from "../Helpers/gameState";
import { useEffect } from "react";

const Landing = () => {
  useEffect(() => {
    const { user } = useUser();
    if (!user) {
      SaveToStorage(basic_user_profile());
    }
  });

  return (
    <Card className={css.attributionDiv}>
      <h5>Powered By</h5>
      <Image src={coingGecko} alt="Coin Gecko" />
    </Card>
  );
};

export default Landing;
