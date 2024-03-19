const express = require('express');
const app = express();
const PORT = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
 console.log(`Server is running on ${PORT}`);
});

const home = require('./views/home');
const student = require('./views/student');
const fs = require('fs');

app.get('/', (req, res) => {
 res.send(home.renderPage());
});

app.get('/student', (req, res) => {
    const data = {
        code: req.query.code,
        name: req.query.name,
        lastname: req.query.lastname,
        gender: req.query.gender,
        age: req.query.age,
        studyField: req.query.studyField
    };
    res.send(student.renderPage(data));
});


const { handleHome, handleStudent } = require('./routes');

app.get('/', handleHome);
app.get('/student', handleStudent);

app.post('/student', (req, res) => {
    const data = req.body;
    fs.writeFileSync(`${data.code}.txt`, JSON.stringify(data));
    res.redirect(`/student?code=${data.code}&name=${data.name}&lastname=${data.lastname}&gender=${data.gender}&age=${data.age}&studyField=${data.studyField}`);
});


app.use((req, res) => {
    res.status(404).send('404 Not Found');
   });
      
   

   
   