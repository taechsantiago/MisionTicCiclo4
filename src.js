const express = require('express');
const app = express();

//let aqi_ranges = require('./aqi_ranges.json');
//const limits = require('./limits.json');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/api/air-quality/aqi-ranges', (req, res)=>{
    res.json(aqi_ranges);
});

app.post('/api/air-quality/aqi-ranges', (req, res)=>{
    aqi_ranges.push(req.body);
    res.json(aqi_ranges);
});

app.get('/api/air-quality/limits', (req, res)=>{
    res.json(limits);
});

module.exports = app;