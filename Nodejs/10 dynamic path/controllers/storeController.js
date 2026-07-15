const Home = require("../models/Home");

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/index", {
      homes: registeredHomes,
      pageTitle: "Tumahara airbnb",
    });
  });
};
exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/homes", {
      homes: registeredHomes,
      pageTitle: "Tumahara airbnb",
    });
  });
};

exports.getFavourites = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/favourites", {
      homes: registeredHomes,
      pageTitle: "Favourites",
    });
  });
};

exports.postAddFavourites = (req, res, next) => {
  console.log("Came to add favourite", req.body);
  res.redirect("/favourites");
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeIdentity;
  Home.findById(homeId, (home) => {
    if(!home){
      console.log("Home not found");
      return res.redirect("/homes");
    }
    res.render("store/home-detail", { home: home, pageTitle: "Home detail" });
  });
};
