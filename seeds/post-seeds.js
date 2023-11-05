const { Post } = require('../models');

const postData = [
    {
        title: 'History is cool!',
        content: 'Glad to have found this website so I can talk to my fellow history buffs!',
        user_id: 1
    },
    {
        title: 'Awesome!',
        content: 'This place is cool.',
        user_id: 2
    },
    {
        title: 'I love Ancient Roman history',
        content: 'Lets discuss it here!',
        user_id: 3
    },
    {
        title: 'History is kinda boring',
        content: 'The past is irrelevant, everyone who is cool knows the future is where its at.',
        user_id: 4
    },
    {
        title: 'This is a delete-able Post',
        content: 'Delete Me!',
        user_id: 1
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
