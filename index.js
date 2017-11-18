const express = require('express');
const reload = require('reload');

const app = express();
app.set('view engine', 'ejs');
// app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('home'));

app.get('/chao/:name/:age', (req, res) => {
    const { name, age } = req.params;
    // res.send(`Chao ${name}, ${age} tuoi.`);
    res.render('chao', { name, age })
});

app.listen(3000, () => console.log('Server started!'));

reload(app);
