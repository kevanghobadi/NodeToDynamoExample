var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

var dynamodb = new AWS.DynamoDB();

var params = {
    TableName : "Lookup",
    KeySchema: [
        { AttributeName: "name", KeyType: "HASH"},  //Partition key
        { AttributeName: "email", KeyType: "RANGE" }  //Sort key
    ],
    AttributeDefinitions: [
        { AttributeName: "name", AttributeType: "S" },
        { AttributeName: "email", AttributeType: "S" }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
    }
};

exports.createTable = function(req, res) {
  dynamodb.createTable(params, function(err, data) {
      if (err) {
          console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
      } else {
          console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
      }
    });
}
