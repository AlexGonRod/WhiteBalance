require('dotenv').config();

const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');


//const mongo = {
const host = process.env.MONGO_HOST;
const port = process.env.MONGO_PORT;
const database = process.env.MONGO_DB;


//with (mongo) {
mongoose.connect(`mongodb://${host}:${port}/${database}`)
	.then(() => {

		const app = express();

		app.use(cors());

		app.use('/api', routes);

		const port = process.env.PORT;

		app.listen(port, () => console.log(`Conection on ${port}`));
	})
	.catch(err => {
		console.error('App started error:',err.stack);
		process.exit(1);
	});
//}







