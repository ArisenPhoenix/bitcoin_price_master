export const get_current_date = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = dd + "-" + mm + "-" + yyyy;

  console.log("currentDate: ", formattedToday);
  return formattedToday;
};

export const convert_unix_timestamp = (UNIX_Timestamp) => {
  var date = new Date(UNIX_Timestamp * 1000);
  return date;
};

export const create_unix_timestamp = (date) => {
  const currentUnixTime = Math.round(new Date().getTime() / 1000);
  return currentUnixTime;
};
