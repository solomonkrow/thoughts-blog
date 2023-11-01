const { User } = require('../models');

const userData = [
    {
        username: "userOne",
        email: "userOne@email.com",
        password: "password1"
      },
      {
        username: "userTwo",
        email: "userTwo@email.com",
        password: "password2"
      },
      {
        username: "userThree",
        email: "userThree@email.com",
        password: "password3"
      },
      {
        username: "userFour",
        email: "userFour@email.com",
        password: "password4"
      }
    ];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;