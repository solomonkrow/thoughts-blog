const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://today-in-history.p.rapidapi.com/thisday',
        headers: {
            'X-RapidAPI-Key': 'a5aa8fb9e3msh1d27ab44aa1f504p19e952jsn5ed0bf30f897',
            'X-RapidAPI-Host': 'today-in-history.p.rapidapi.com',
        },
    };

    try {
        const response = await axios.request(options);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = router;
