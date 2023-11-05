const { User } = require('../models');

const userData = [
    {
        username: 'solomonkrow',
        email: 'josiah@email.com',
        password: 'password1'
    },
    {
        username: 'ponetone',
        email: 'mikel@email.com',
        password: 'password2'
    },
    {
        username: 'kevinsmithseven',
        email: 'kevin@email.com',
        password: 'password3'
    },
    {
        username: 'lernantino',
        email: 'lernantino@email.com',
        password: 'password4'
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;