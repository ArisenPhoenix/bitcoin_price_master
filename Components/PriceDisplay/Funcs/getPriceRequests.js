import FETCH from "../../../Helpers/FETCH/FETCH";
export const get_current_price = async (setPrice) => {
  const current_price_data = await FETCH("/api/get_current_price", "GET");
  const current_price = current_price_data.bitcoin;
  const newData = {
    price: current_price.usd,
    time: current_price.last_updated_at,
  };
  // console.log("get_current_price newData: ", newData);
  setPrice({ ...newData });
};

export const get_next_price = async () => {
  const nextPrice_data = await FETCH("/api/get_current_price", "GET");
  const nextPrice = nextPrice_data.bitcoin;
  const newData = {
    price: nextPrice.usd,
    time: nextPrice.last_updated_at,
  };
  return { ...newData };
};

export const get_price_history = async (setPriceHistory) => {
  const price_history_data = await FETCH("/api/get_btc_history", "GET");
  const fixed_data = price_history_data.prices.map((item, index) => {
    return { data: new Date(item[0] * 1000), price: item[1] };
  });
  setPriceHistory(fixed_data);
  return price_history_data;
};
