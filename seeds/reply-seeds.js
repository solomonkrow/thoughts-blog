const { Reply } = require('../models');

const replyData = [
    {
        content: 'Totally!',
        user_id: 3,
        comment_id: 1
    },
    {
        content: 'Welcome!',
        user_id: 4,
        comment_id: 2
    },
    {
        content: 'Praetorians assemble!',
        user_id: 1,
        comment_id: 3
    },
    {
        content: 'This place sucks. Later nerds.',
        user_id: 4,
        comment_id: 4
    },
    {
        content: 'I will also be destroyed when my post is deleted! DESTROY!',
        user_id: 1,
        comment_id: 3
    }
];

const seedReplies = () => Reply.bulkCreate(replyData);

module.exports = seedReplies;