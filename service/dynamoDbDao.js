var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

var dynamodb = new AWS.DynamoDB();
var docClient = new AWS.DynamoDB.DocumentClient();

exports.createTable = function(req, res) {
  var params = {
      TableName : "Lookup",
      KeySchema: [
          { AttributeName: "name", KeyType: "HASH"},  //Partition key
      ],
      AttributeDefinitions: [
          { AttributeName: "name", AttributeType: "S" },
      ],
      ProvisionedThroughput: {
          ReadCapacityUnits: 1,
          WriteCapacityUnits: 1
      }
  };
  dynamodb.createTable(params, function(err, data) {
      if (err) {
          console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
      } else {
          console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
      }
    });
}


exports.addToTable = function(name, email) {
  var params = {
     TableName: "Lookup",
     Item: {
            "name": name,
            "email": email
          }
  };
  docClient.put(params, function(err, data) {
      if (err) {
          console.error("Unable to add record", name, ". Error JSON:", JSON.stringify(err, null, 2));
      } else {
          console.log("PutItem succeeded:", email);
      }
   });
}

exports.lookupFromTable = function(name, res) {
  var params = {
    TableName: "Lookup",
    Key:{
        "name": name
    }
  };
  docClient.get(params, function(err, data) {
    if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        res.send("GetItem succeeded:", JSON.stringify(data, null, 2));
    }
  });
}

exports.deleteTable = function () {

var params = {
    TableName : "Lookup"
};

dynamodb.deleteTable(params, function(err, data) {
    if (err) {
        console.error("Unable to delete table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Deleted table. Table description JSON:", JSON.stringify(data, null, 2));
    }
  });
}
