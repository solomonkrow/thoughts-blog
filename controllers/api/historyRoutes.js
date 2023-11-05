// /* const express = require('express');
// const router = express.Router();
// const axios = require('axios');

// // Route handler for fetching data from the Numbers API based on the current date
// router.get('/numbersapi', async (req, res) => {
//     try {
//         // Get the current date and month
//         const currentDate = new Date();
//         const month = currentDate.getMonth() + 1; // Note: January is 0-based index, so add 1 to get the actual month
//         const day = currentDate.getDate();

//         // Construct the API URL with the current month and day
//         const apiUrl = `http://numbersapi.com/${month}/${day}/date`;

//         // Make a request to the constructed API endpoint
//         const response = await axios.get(apiUrl);

//         // Send the API response back to the client
//         res.status(200).send(response.data);
//     } catch (error) {
//         // Handle errors and send an error response to the client
//         console.error('Error fetching data from Numbers API:', error);
//         res.status(500).send('Error fetching data from the Numbers API');
//     }
// });

// module.exports = router;
