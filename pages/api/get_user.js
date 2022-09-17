import AWS from "aws-sdk";
const callAWS = async (req, res) => {
  const userData = req.body;
  const UserEmail = req.body;
  const dynamoDB = new AWS.DynamoDB({
    apiVersion: process.env.TOGGLE_AWS_API_VERSION,
    region: process.env.TOGGLE_AWS_REGION,
    accessKeyId: process.env.TOGGLE_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.TOGGLE_AWS_SECRET_ACCESS_KEY,
  });

  if (req.method === "POST") {
    const params = {
      TableName: "Users",
      Key: { UserEmail: { S: UserEmail } },
    };

    return await new Promise((resolve, reject) => {
      dynamoDB.getItem(params, (err, data) => {
        if (err) {
          console.log(
            "Error ---------------------------------------------------------------------------------"
          );
          console.log("CALL ERROR: ", err);
          res.status(400);
          return reject(res.send(err));
        } else {
          const newData = JSON.stringify(data.Item);
          res.status(200);
          return resolve(res.send(newData));
        }
      });
    });
  } else if (req.method === "PUT") {
    const params = {
      TableName: "Users",
      Item: {
        ...userData,
      },
    };
    return await new Promise((resolve, reject) => {
      dynamoDB.putItem(params, (err, data) => {
        if (err) {
          es.status(400);
          console.log(
            "Error ---------------------------------------------------------------------------------"
          );
          console.log("AWS PUT CALL ERROR: ", err);
          return reject(res.send(JSON.stringify(err)));
        } else {
          res.status(200);
          // console.log("PUT CALL DATA: ", data);
          return resolve(res.send(JSON.stringify(data)));
        }
      });
    });
  }
};

export default callAWS;
