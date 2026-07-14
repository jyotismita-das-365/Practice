const Home = require('./../models/Home');

exports.getHome = (req, res, next) => {
  let registeredHomes = Home.fetchAll();
  res.render('index', {homes: registeredHomes, pageTitle: 'Hamara airbnb'});
};