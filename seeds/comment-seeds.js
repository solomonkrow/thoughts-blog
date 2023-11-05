const { Comment } = require('../models');

const commentData = [
    {
        content: 'I agree! History is so cool!',
        user_id: 2,
        post_id: 1
    },
    {
        content: 'Im happy I found this site by chance',
        user_id: 1,
        post_id: 2
    },
    {
        content: 'Et tu Brute?',
        user_id: 2,
        post_id: 3
    },
    {
        content: 'You have no clue what you are talking about smooth brain...this is not the place for you',
        user_id: 1,
        post_id: 4
    },
    {
        content: 'I will be destroyed when my post is deleted! DESTROY!',
        user_id: 2,
        post_id: 5
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;