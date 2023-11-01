const { Reply } = require('../models');

const replyData = [
    {
      content: "This is a reply to the first comment.",
      user_id: 3,
      comment_id: 1
    },
    {
      content: "This is a reply to the second comment.",
      user_id: 4,
      comment_id: 2
    },
    {
      content: "This is another reply to the second comment.",
      user_id: 2,
      comment_id: 2
    },
    {
      content: "This is a reply to the fourth comment.",
      user_id: 1,
      comment_id: 4
    }
  ];

const seedReplies = () => Reply.bulkCreate(replyData);

module.exports = seedReplies;