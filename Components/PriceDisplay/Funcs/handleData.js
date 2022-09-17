import { AWS_GET, AWS_PUT } from "../../../Helpers/FETCH/FETCH";
import {
  RETREIVE_FROM_LOCAL_STORAGE,
  SAVE_TO_LOCAL_STORAGE,
} from "../../../Helpers/gameState";
import basic_user_profile from "../../../Helpers/basic_user_profile";

export const retreiveUserData = async (
  functionThatCalled,
  email,
  setStorage
) => {
  const storageData = RETREIVE_FROM_LOCAL_STORAGE();
  if (storageData && !storageData.UserEmail && setStorage) {
    return await AWS_GET(email, setStorage);
  }
  switch (functionThatCalled) {
    case "Render":
      return storageData;
    case "IndexPageCall":
      // A fall back to avoid problems with people who are new users.
      return basic_user_profile();
    case "Init":
      const aws = await AWS_GET(email, setStorage);
      return aws ? aws : RETREIVE_FROM_LOCAL_STORAGE(email);
    default:
      return storageData ? storageData : await AWS_GET(email, setStorage);
  }
};

export const saveUserData = (functionThatCalled, data, email) => {
  switch (functionThatCalled) {
    case "Render":
      return SAVE_TO_LOCAL_STORAGE(data, "", email);
    case "AWS":
      SAVE_TO_LOCAL_STORAGE(data, "", email);
      return AWS_PUT(data);
    default:
      SAVE_TO_LOCAL_STORAGE(data);
      AWS_PUT(data);
  }
};
