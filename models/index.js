const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Reply = require('./Reply');

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Reply, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Reply.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.hasMany(Reply, {
    foreignKey: 'comment_id',
    onDelete: 'CASCADE'
});

Reply.belongsTo(Comment, {
    foreignKey: 'comment_id',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(Comment, {
    foreignKey: 'post_id',
});


module.exports = { User, Post, Comment, Reply };