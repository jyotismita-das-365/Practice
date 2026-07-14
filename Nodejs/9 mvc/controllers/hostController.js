const Home = require('./../models/Home');

exports.getAddHome = (req, res, next) => {
  res.render("add-home", {pageTitle: 'Host Your Home'});
};

exports.postAddHome = (req, res, next) => {
  const houseName = req.body.houseName;
  const newHome = new Home(houseName);
  newHome.save();
  res.render("home-added", {pageTitle: 'Home Hosted'});
};