import { AWS_GET, AWS_PUT } from "../../../Helpers/FETCH/FETCH";
import { RetreiveFromStorage, SaveToStorage } from "../../../Helpers/gameState";

export const retreiveUserData = async (
  functionThatCalled,
  email,
  setStorage
) => {
  const storageData = RetreiveFromStorage();
  if (storageData && !storageData.UserEmail) {
    return await AWS_GET(email, setStorage);
  }

  switch (functionThatCalled) {
    case "Render":
      return storageData;
    case "Init":
      // setStorage(storageData)
      const aws = await AWS_GET(email, setStorage);
      if (aws) {
        return aws;
      } else {
        return storageData;
      }

    default:
      return storageData ? storageData : await AWS_GET(email, setStorage);
  }
};

export const saveUserData = (functionThatCalled, data) => {
  switch (functionThatCalled) {
    case "Render":
      SaveToStorage(data);
      break;
    case "AWS":
      SaveToStorage(data);
      AWS_PUT(data);
      break;
    default:
      break;
  }
  SaveToStorage(data);
  AWS_PUT(data);
};
