const router = require('express').Router();
const { User } = require('../../models');



// CREATE new user
router.post('/signup', async (req, res) => {
    try {
        console.log(req.body); //TODO comment out once verified working
        const dbUserData = await User.create({
            username: req.body.email,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.user_id = dbUserData.id;
            res.status(200).json(dbUserData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Login

router.post('/login', async (req, res) => {
    try {
        //TODO comment out once verified working
        // console.log(req.body);
        const dbUserData = await User.findOne({
            where: {
                email: req.body.email,
            },
        });
        if (!dbUserData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }
        console.log(dbUserData);

        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.loggedIn = true;

            res.json({ user: dbUserData, message: 'You are now logged in!' });
        });
        // .status(200)
    } catch (err) {
        // console.log(err);
        res.status(400).json(err);
    }
});

// Logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

router.post('/upload', parser.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            throw new Error('No image file provided');
        }
        const imageUrl = req.file.path;

        const savedImage = await Image.create({
            imageUrl: imageUrl,

        });

        res.json({ imageUrl: savedImage.imageUrl });
    } catch (error) {
        console.error('Error uploading image:', error.message);
        res.status(500).json({ error: error.message });
    }
});
module.exports = router;