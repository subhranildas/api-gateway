const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();

// Serve frontend GUI
app.use(express.static(path.join(__dirname, 'public')));

// Aggregated endpoint
app.get('/aggregate', async (req, res) => {
  try {
    // const usersResponse = await axios.get('http://localhost:3001/users');
    // const dataResponse = await axios.get('http://localhost:3002/data');
    const usersResponse = await axios.get('http://user-service:3001/users');
    const dataResponse = await axios.get('http://data-service:3002/data');

    res.json({
      users: usersResponse.data,
      data: dataResponse.data
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch data from services' });
  }
});

app.listen(3000, () => {
  console.log('API Gateway running on port 3000');
});
