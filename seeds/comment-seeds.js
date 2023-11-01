const { Comment } = require('../models');

const commentData = [
    {
        content: 'This is a comment on the first post.',
        user_id: 2,
        post_id: 1
    },
    {
        content: 'This is a comment on the second post.',
        user_id: 1,
        post_id: 2
    },
    {
        content: 'This is another comment on the second post.',
        user_id: 3,
        post_id: 2
    },
    {
        content: 'This is a comment on the fourth post.',
        user_id: 4,
        post_id: 4
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;