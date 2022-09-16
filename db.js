// import AWS, { AWS_SDK_LOAD_CONFIG } from "aws-sdk";

// // Update AWS config
// AWS_SDK_LOAD_CONFIG
// AWS.config.update({
//   apiVersion: "latest",
//   region: "us-west-1",
//   AWS_SDK_LOAD_CONFIG: 1,
//   credentials: {
//     // AccessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     // SecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,

//     AccessKeyId: "AKIA233ZYV5JI2H4T64G",
//     SecretAccessKey: "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",
//   },
// });

// const db = new AWS.DynamoDB.DocumentClient({ apiVersion: "latest" });

// export default db;
// // Create DynamoDB service object
// const db = new AWS.DynamoDB.DocumentClient({ apiVersion: "latest" });

// export default db;

// import { DynamoDBClient,
//   ListTablesCommand
// } from "@aws-sdk/client-dynamodb";
// (async function () {
// const dbclient = new DynamoDBClient({ region: 'us-west-1'});

// try {
// const results = await dbclient.send(new ListTablesCommand);
// results.Tables.forEach(function (item, index) {
// console.log(item.Name);
// });
// } catch (err) {
// console.error(err)
// }
// })();

// import { DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
// const DynamoDBClientConfig({region: "us-west-1"})
