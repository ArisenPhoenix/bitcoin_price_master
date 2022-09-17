const get_current_price = async (req, res) => {
  const uri =
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_last_updated_at=true";
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
