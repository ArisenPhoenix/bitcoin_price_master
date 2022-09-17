import basic_user_profile from "../../../Helpers/basic_user_profile";
import { AWS_GET, AWS_PUT } from "../../../Helpers/FETCH/FETCH";
import { SAVE_TO_LOCAL_STORAGE } from "../../../Helpers/handleLocalStorage";

export const loginUser = async (userData, setUserData) => {
  let profile = await AWS_GET(userData.email);

  if (!profile || profile.error) {
    profile = await addUser(userData, setUserData);
  }
  setUserData(profile);
  SAVE_TO_LOCAL_STORAGE(profile);
  return profile;
};

export const addUser = async (userData, setUserData) => {
  const template = basic_user_profile();
  template.UserEmail = userData.email;
  template.userName = userData.name;
  await AWS_PUT(template);
  setUserData(template);
  SAVE_TO_LOCAL_STORAGE(template);
  return template;
};
