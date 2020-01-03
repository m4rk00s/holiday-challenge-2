const express = require('express');
const cors = require('cors');
const { contactRoute } = require('./routes');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/contacts', contactRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
