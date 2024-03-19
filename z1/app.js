const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
 console.log(`Server is running on ${PORT}`);
});

const home = require('./views/home');
const student = require('./views/student');

app.get('/', (req, res) => {
 res.send(home.renderPage());
});

app.get('/student', (req, res) => {
 res.send(student.renderPage());
});
