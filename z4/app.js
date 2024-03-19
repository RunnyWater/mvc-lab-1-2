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

app.use((req, res) => {
    res.status(404).send('404 Not Found');
   });

const { handleHome, handleStudent } = require('./routes');

app.get('/', handleHome);
app.get('/student', handleStudent);

app.post('/student', (req, res) => {
    const data = req.body;
    fs.writeFileSync(`${data.code}.txt`, JSON.stringify(data));
    res.redirect('/student-profile');
   });

app.get('/student-profile', (req, res) => {
    // Tutaj możemy wczytać dane studenta z pliku i przekazać je do widoku.
    // Na przykład, jeśli mamy plik '12345.txt', możemy go wczytać i przekazać dane do widoku.
    const studentData = JSON.parse(fs.readFileSync('12345.txt', 'utf8'));
    res.send(student.renderPage(studentData));
   });
   
      

   
   