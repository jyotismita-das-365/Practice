const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const url = "mongodb+srv://root:root@airbnb.dolr28h.mongodb.net/?appName=airbnb"

const mongoConnect = (callback) => {
  MongoClient.connect(url)
.then((client) => {
  console.log(client);
  callback(client);
})
.catch(error => {
  console.log('Error came while connecting to mongoDB', error);
})
}

module.exports = mongoConnect;