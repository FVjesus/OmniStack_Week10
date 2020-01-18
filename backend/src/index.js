const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://fveloso:123abacaxi@cluster0-mmigt.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser:  true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);
