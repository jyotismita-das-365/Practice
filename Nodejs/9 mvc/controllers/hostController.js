const Home = require('./../models/Home');

exports.getAddHome = (req, res, next) => {
  res.render("add-home", {pageTitle: 'Host Your Home'});
};

exports.postAddHome = (req, res, next) => {
  const {houseName, price, location, rating, photoUrl} = req.body.houseName;
  const newHome = new Home(houseName, price, location, rating, photoUrl);
  newHome.save();
  res.render("home-added", {pageTitle: 'Home Hosted'});
};