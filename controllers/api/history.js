const axios = require('axios');

async function getHistoricalEvents(req, res) {
    try {
        // Make a GET request to the Historical Events API
        const response = await axios.get('https://api-ninjas.com/api/historicalevents');

        // Extract the data from the API response
        const historicalEvents = response.data;

        // Send the historical events as a JSON response
        res.json(historicalEvents);
    } catch (error) {
        // Handle errors, such as network issues or API errors
        console.error('Error fetching historical events:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    getHistoricalEvents,
};