const express = require('express');
const cors = require('cors');
const service = require('./Service');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/data', (req, res) => {
    res.json(service);
});

app.get('/api/demo', (req, res) => {
    res.json({ message: 'Backend is running!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
