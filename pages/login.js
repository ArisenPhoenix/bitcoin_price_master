import FETCH from "../Helpers/FETCH/FETCH";
const login = async (data) => {
  return FETCH("/api/login", "POST", data, "LOGIN FRONT END");
};

export default login;
