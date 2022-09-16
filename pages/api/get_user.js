import AWS from "aws-sdk";
import SERVERSIDE_GET_AWS_CALL from "../../Helpers/serverSideGetCall";

const callAWS = async (req, res) => {
  console.log("CALLING AWS");
  const userData = req.body;
  const UserEmail = req.body;

  const dynamoDB = new AWS.DynamoDB({
    apiVersion: process.env.TOGGLE_AWS_API_VERSION,
    region: process.env.TOGGLE_AWS_REGION,
    accessKeyId: process.env.TOGGLE_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.TOGGLE_AWS_SECRET_ACCESS_KEY,
  });

  if (req.method === "POST") {
    // return SERVERSIDE_GET_AWS_CALL()
    const response = await SERVERSIDE_GET_AWS_CALL(UserEmail);
    res.send(response);
  } else if (req.method === "PUT") {
    console.log("updatedUserData: ", userData);
    const params = {
      TableName: "Users",
      Item: {
        ...userData,
      },
    };
    console.log("PUT PARAMS: ", params);
    dynamoDB.putItem(params, (err, data) => {
      console.log(
        "PUTTING ITEM IN DATABASE..........................................."
      );
      if (err) {
        console.log("AWS PUT ERROR: ", err);
        res.send(JSON.stringify(err));
      } else {
        console.log("RESPONSE DATA: ", JSON.stringify(data));
        res.send(JSON.stringify(data));
      }
    });
  }
};

export default callAWS;

// export default async function (req, res) {
//   const userData = req.body;
//   // filter API requests by method
//   if (req.method === "GET") {
//     // GET USER DATA ON LOGIN OR IF NO DATA IN LOCAL STORAGE
//     const params = {
//       TableName: "UserData",
//       UserEmail: userData.email,
//     };

//     db.get(params, function (err, data) {
//       if (err) {
//         console.log("Error", err);
//       } else {
//         // send the json response from the callback
//         res.json(data.Item);
//       }
//     });
//   } else if (req.method === "PUT") {
//     // Update User Data
//     const params = {
//       TableName: "UserData",
//       UserEmail: userData.email,
//       user: {
//         ...userData,
//       },
//     };

//     db.update(params, (err, data) => {
//       if (err) {
//         console.log("Error", err);
//       } else {
//         console.log("Success, updated.", data);
//       }
//     });
//   }
// }
