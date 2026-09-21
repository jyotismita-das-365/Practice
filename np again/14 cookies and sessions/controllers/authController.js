exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Login",
    isLoggedIn: req.session.isLoggedIn || false,
  });
};

exports.postLogin = (req, res, next) => {
  req.session.isLoggedIn = true;
  res.redirect("/");
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    }
    res.redirect("/login");
  });
};
