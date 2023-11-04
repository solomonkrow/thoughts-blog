const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
const replyRoutes = require('./replyRoutes');
// const historyRoutes = require('./historyRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/replies', replyRoutes);
// router.use('/history', historyRoutes);

module.exports = router;
