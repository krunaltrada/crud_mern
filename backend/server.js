const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const { errorHandler } = require('./middleware/errorMiddleware');
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goalRoutes'));

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server listen to port : ${port}`);
});