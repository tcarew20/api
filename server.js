const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const app = express();
const bulletinsRoute = require('./api/bulletins.js')

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/bulletins', bulletinsRoute);


mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true}, () =>
    console.log(`DB connected`));

mongoose.set('useFindAndModify', false);

app.listen(process.env.PORT, () => console.log(`Server running on ${process.env.PORT}`))


