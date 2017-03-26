'use strict';

const express = require('express');
const app = express();

const requestTime = (req, res, next) => {
	req.requestedTime = Date.now();
	let newDate = req.requestedTime.toISOString();
	next();
}

app.use(express.static(__dirname + '/'));
app.use(requestTime);

app.get('/', (req, res, next) => {
	res.send('hello world')
})

app.get('/time', (req, res, next) => {
	res.send(`Run at ${newDate}`);
})



app.listen(8080, () => {
	console.log('server listening on port 8080')
})
