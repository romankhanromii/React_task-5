const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

const allowedOrigins = ['http://localhost:3000', 'http://example.com'];

app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

// Route handler for /api/JSTask
app.get('/api/JSTask', async (req, res) => {
  try {
    // Fetch data from the external API using axios
    const response = await axios.get('http://dashboard.familyindustriesapps.com/api/JSTask');
    const data = response.data;

    // Send the fetched data back as a response
    res.json(data);
  } catch (error) {
    // Handle errors if any occurred during the API request
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
