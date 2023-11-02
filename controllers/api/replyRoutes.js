const router = require('express').Router();
const { Reply } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newReply = await Reply.create({
            ...req.body,
            user_id: req.session.user_id
        });
        res.status(200).json(newReply);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const replyData = await Reply.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            },
        });

        if (!replyData) {
            res.status(400).json({ message: 'No Reply with that ID'});
            return;
        }

        res.status(200).json(replyData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;