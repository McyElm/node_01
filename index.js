const express = require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();
app.use(express.static('build'));
app.set('views', path.join(__dirname, 'build'));
app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.get('/', (req, res) => {
    res.render('index.html');
});



app.listen(8000, () => console.log('listening on port 8000!!!'));
