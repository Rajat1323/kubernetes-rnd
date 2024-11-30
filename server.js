const express = require('express');
const app = express();

app.get('/cpu', (req, res) => {
    const start = Date.now();
    // Simulate CPU load for 30 seconds
    while (Date.now() - start < 3000000) {
        Math.sqrt(Math.random()); // Arbitrary CPU-intensive task
    }
    res.send('CPU load completed');
});

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

const PORT = process.env.PORT || 9999;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
