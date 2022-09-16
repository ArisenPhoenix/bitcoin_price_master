import { useUser } from "@auth0/nextjs-auth0";
import AWS from "aws-sdk";
const SERVERSIDE_GET_AWS_CALL = async (email) => {
  //   const { user } = useUser();
  let final;
  const dynamoDB = new AWS.DynamoDB({
    apiVersion: "latest",
    region: "us-west-1",
    accessKeyId: "AKIA233ZYV5JI2H4T64G",
    secretAccessKey: "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",
  });

  const params = {
    TableName: "Users",
    Key: { UserEmail: { S: email } },
  };

  console.log("GET PARAMS: ", params);
  return new Promise((resolve, reject) => {
    dynamoDB.getItem(params, (err, data) => {
      if (err) {
        console.log("CALL ERROR: ", err);
      } else {
        console.log(data);
        const newData = JSON.stringify(data.Item);
        //   resolve(res.send(newData));
        final = newData;
        resolve(newData);
      }
    });
  });
};

export default SERVERSIDE_GET_AWS_CALL;
