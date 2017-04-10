const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Hello Express');
});

app.get('/foods', (req, res) => {
	const foods = [
		'Apple', 'Pear', 'Strawberry'
	];
	res.send(foods);
});

app.get('/name', (req, res) => {
	res.send('Lu');
});

app.get('/friends', (req, res) => {
	const friends = [
		'Amber', 'Sonia', 'Rehka'
	];
	res.send(friends);
});

app.get('/favorite-film', (req, res) => {
	const favoritefilm = [
		'The Guardian of the Galaxy', 'Star War The Rogue One', 'Dr. Strange', 'Cloud Atlas'
	];
	res.send(favoritefilm);
});

app.listen(5000, () => {
	console.log('app is listening on port 5000');
});