const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    //res.send('Hello World');
    //res.sendFile(path.join(__dirname, './views/index.html'));
    res.render('index', {title: 'First Website' });
});

router.get('/contact', (req, res) => {
    //res.send('Hello World');
    //res.sendFile(path.join(__dirname, './views/index.html'));
    res.render('contact', {title: 'First Website' });
});

module.exports = router;