const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');
const userModel = require('/models/User');
const blogModel = require('/models/Blog');
const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/lecture18').then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

app.use('/users', userRoutes);
app.use('/blogs', blogRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});