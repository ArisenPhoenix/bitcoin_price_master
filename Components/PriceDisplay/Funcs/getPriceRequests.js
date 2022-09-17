import FETCH from "../../../Helpers/FETCH/FETCH";
export const get_current_price = async (
  setCurrent,
  option,
  functionThatCalled,
  setPrevious
) => {
  if (functionThatCalled) {
    // For Debugging
    console.log(functionThatCalled);
  }
  const current_price_data = await FETCH("/api/get_current_price", "GET");
  const current_price = current_price_data.bitcoin;
  const newData = {
    price: current_price.usd,
    time: current_price.last_updated_at,
  };
  // console.log("current price option is: ", option);

  if (option === "all") {
    setCurrent({ ...newData });
    setPrevious && setPrevious({ ...newData });
  } else if (option === "current") {
    setCurrent({ ...newData });
  } else if (option === "previous") {
    setPrevious({ ...newData });
  } else if (option === "none") {
    return { ...newData };
  }
  // console.log("get_current_price newData: ", newData);
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
