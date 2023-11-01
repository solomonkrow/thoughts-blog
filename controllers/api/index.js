const router = require('express').Router();
// TODO const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
const replyRoutes = require('./replyRoutes');

// TODO router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/replies', replyRoutes);

module.exports = router;
