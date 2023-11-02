const axios = require('axios');

const API_URL = 'https://api-ninjas.com/api/historicalevents';
const AUTH_TOKEN = 'LutFz+dQF3uzgpv2j0CVdQ==PvQI8qBMn4WfrMp'; // Replace this with your actual authentication token

app.get('/historical-events', async (req, res) => {
    try {
        // Make a GET request to the Historical Events API with the authentication token in the headers
        const response = await axios.get(API_URL, {
            headers: {
                Authorization: `Bearer ${AUTH_TOKEN}`
            }
        });

        // Extract the data from the API response
        const historicalEvents = response.data;

        // Send the historical events as a JSON response
        res.json(historicalEvents);
    } catch (error) {
        // Handle errors, such as network issues or API errors
        console.error('Error fetching historical events:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = {
    getHistoricalEvents,
};