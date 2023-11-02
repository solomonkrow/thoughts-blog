const { Post } = require('../models');

const postData = [
    {
        title: 'First Post',
        content: 'This is the content of the first post.',
        user_id: 1
    },
    {
        title: 'Second Post',
        content: 'This is the content of the second post.',
        user_id: 2
    },
    {
        title: 'Third Post',
        content: 'This is the content of the third post.',
        user_id: 3
    },
    {
        title: 'Fourth Post',
        content: 'This is the content of the fourth post.',
        user_id: 4
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
