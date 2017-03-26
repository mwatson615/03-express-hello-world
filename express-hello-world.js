'use strict';

const express = require('express');
const app = express();

const moment = require('moment');
let currentDate = moment();

const requestTime = (req, res, next) => {
	let now = new Date();
	// req.requestedTime = moment(Date.now());
	req.requestedTime = now.toISOString();
	next();
}

app.use(express.static(__dirname + '/'));
app.use(requestTime);

app.get('/', (req, res, next) => {
	res.send('hello world')
})

app.get('/time', (req, res, next) => {
	res.send(`Run at ${req.requestedTime}`);
})



app.listen(8080, () => {
	console.log('server listening on port 8080')
})
