const get_current_price = async (req, res) => {
  const uri =
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_last_updated_at=true";
  const base = "https://api.coingecko.com/api/v3/coins/";
  const endpont = "simple/token_price";
  const coin = "bitcoin";
  const cur = "&vs_currencies=usd";
  const options = "&include_last_updated_at=true";
  const api = base + endpont + coin + cur + options;
  const params = {
    ids: "bitcoin",
    vs_currencies: "usd",
    include_last_updated_at: true,
  };
  await new Promise((resolve, reject) => {
    fetch(uri)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        // console.log("CURRENT PRICE DATA: ", data);
        return resolve(res.send(data));
      })
      .catch((err) => {
        console.log("ERROR: ", err);
        return reject(err);
      });
  });
};

export default get_current_price;
