const FETCH = async (api_route, method, body, functionThatCalled) => {
  functionThatCalled &&
    console.log(`${functionThatCalled} is fetching using the ${method} method`);
  const m = method.toUpperCase();
  const b = body ? body : null;
  try {
    const response = await fetch(api_route, {
      method: m.toUpperCase(),
      headers: {
        "Content-Type": "application/json",
      },
      body: m === "GET" ? null : JSON.stringify(b),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(
      `ERROR IN FETCH CATCH | Called By: ${functionThatCalled}............................................`
    );
  }
};

export default FETCH;

import { dataToItem, itemToData } from "dynamo-converters";
export const AWS_GET = async (data, setStorage) => {
  const retreivedData = await FETCH("/api/get_user", "POST", data);
  // console.log("RETREIVED DATA: ", retreivedData);
  const fixedData = itemToData(retreivedData);
  setStorage(fixedData);
  return fixedData;
};

export const AWS_PUT = async (data) => {
  const dataToSend = dataToItem(data);
  const result = await FETCH("/api/get_user", "PUT", dataToSend);
  // console.log("AWS_PUT RESULT: ", result);
  return result;
};
