const express = require('express');
const budget = require('./models/budget')
const app = express();
const port = 3000;

//Routes

//Index
app.get('/budgets', (req, res) => {
    res.render('index.ejs', {budget: budget})
})
//Show
app.get('/budgets/:index', (req, res) => {
    res.render('show.ejs', {budget: budget[req.params.index]})
})

//New
app.get('/budgets/new', (req, res) => {
    res.send('Budgtr New')
})

//Create
app.post('/butgets', (req, res) => {
    res.send('Budgtr Under construction')
})

app.listen(port, () => {
    console.log(`Listening on `, port)
})