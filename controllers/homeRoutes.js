const router = require('express').Router();
const { User, Post, Comment, Reply } = require('../models');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                User,
                {
                    model: Comment,
                    include: [User],
                },
            ],
        });
        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/posts/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                User,
                {
                    model: Comment,
                    include: [
                        User,
                        {
                            model: Reply,
                            include: User,
                        },
                    ],
                },
            /* {
                    model: Reply,
                    include: [ User ]
                } */
            ],
        });

        const posts = postData.get({ plain: true });
        /* console.log(posts.comments[0].user);
    console.log(posts.comments[0].replies);
    console.log(posts.comments[0].replies.username); */
        res.render('posts', {
            ...posts,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET user posts for user view
/* router.get('/user', async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [
                User,
            ]
        });

        const userPosts = postData.map((posts) => posts.get({ plain: true }));
        console.log(userPosts);

        res.render('user', {
            ...userPosts,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    }
}); */

router.get('/user', async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Post }, { model: Comment}, { model: Reply}],
        });

        const user = userData.get({ plain: true });

        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [
                User,
            ]
        });

        const userPosts = postData.map((posts) => posts.get({ plain: true }));

        const commentData = await Comment.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [
                User,
            ]
        });

        const userComments = commentData.map((comments) => comments.get({ plain: true }));

        const replyData = await Reply.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [
                User,
            ]
        });

        const userReply = replyData.map((replies) => replies.get({ plain: true }));

        res.render('user', {
            ...user,
            ...userPosts,
            ...userComments,
            ...userReply,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
