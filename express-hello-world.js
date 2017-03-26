'use strict';

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/'));


app.listen(8080, () => {
	console.log('server listening on port 8080')
})
