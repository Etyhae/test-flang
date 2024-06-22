const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

// Serving static files
app.use(express.static("public"));

// Adding routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('Это простое приложение на Express.js')
})
app.get('*', function (req, res) {
    res.status(404).send('404 error');
});

// Server startup logs
app.listen(port, function () {
    console.log(`Server listens ${port} port`);
});
