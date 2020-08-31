const User = require('../models/user');
const Allergy = require('../models/allergy');

module.exports = {
  index,
  showProfile
};

function index(req, res) {
  User.find({})
    .then(users => {
      res.render('users/index', {
        title: "Users",
        user: req.user,
        users
      })
    })
}

function showProfile(req, res) {
  User.findById(req.user._id)
    .then((user) => {
      Allergy.findById(user.allergies)
        .then(allergy => {
          res.render('users/profile', {
            title: 'Profile Page',
            user,
            allergy
          })

        })
    })
}