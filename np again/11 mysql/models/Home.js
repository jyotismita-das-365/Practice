const Favourite = require("./Favourite");
const airbnbDb = require("../util/database-util");

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save(callback) {
    
  }

  static fetchAll(callback) {
    airbnbDb.execute("SELECT * FROM homes").then(([rows]) => {
      console.log(rows);
    })
  }

  static findById(homeId, callback) {
    
  }

  static deleteById(homeId, callback) {
    
  }
}