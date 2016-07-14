const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

const publicPath = path.resolve(__dirname, 'dist');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port, function() {
	console.log('listening on port: ' + port);
});