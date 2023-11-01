const router = require("express").Router();
const { User, Post, Comment, Reply } = require("../models");

router.get("/", async (req, res) => {
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

    res.render("homepage", {
      posts,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        });
        const comments = commentData.map((comment) => comment.get({ plain: true}));

        res.render('homepage', {
            comments
        });
    } catch (err) {
        res.status(500).json(err);
    }
}); */

/* router.get('/', async (req, res) => {
    try {
        const replyData = await Reply.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        });
        const replies = replyData.map((reply) => reply.get({ plain: true}));

        res.render('homepage', {
            replies
        });
    } catch (err) {
        res.status(500).json(err);
    }
}); */

router.get("/posts/:id", async (req, res) => {
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
    res.render("posts", {
      ...posts,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("comments", async (req, res) => {
  try {
    const commentData = await Comment.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const comments = commentData.get({ plain: true });

    res.render("", {
      ...comments,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("replies", async (req, res) => {
  try {
    const replyData = await Reply.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const replies = replyData.get({ plain: true });

    res.render("", {
      ...replies,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
