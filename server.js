const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port, function() {
	console.log('listening on port: ' + port);
});