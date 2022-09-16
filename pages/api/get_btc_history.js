import { convert_unix_timestamp } from "../../Helpers/getDate";

const get_btc_data = async (req, res) => {
  const currentUnixTime = Math.round(new Date().getTime() / 1000);
  const cur = "bitcoin";
  const base = "https://api.coingecko.com/api/v3/coins";
  const query = "market_chart/range?vs_currency=usd&";
  const from = currentUnixTime;
  const to = from + 1000;
  console.log("hishtory from: ", from);
  console.log("history to: ", to);
  const string = `${base}/${cur}/${query}&from=${from}&to=${to}`;

  await new Promise((resolve, reject) => {
    fetch(string)
      .then((resp) => {
        // console.log(resp);
        return resp.json();
      })
      .then((data) => {
        console.log("data: ", data);
        return resolve(res.send(data));
      })
      .catch((err) => {
        console.log("ERROR");
        return console.log(err);
      });
  });
};

export default get_btc_data;
