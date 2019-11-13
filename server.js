const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
const eventRoutes = require('./routes/event')
const PORT = 5000 || env.process.PORT

//middlewares
app.use(express.json())
app.use(cors())
app.use('/events', eventRoutes)

// mongoose connect
mongoose.connect(process.env.DB_CONNECTIONS,  { useNewUrlParser: true, useUnifiedTopology: true },  () => {
	console.log("connected to db")
})

//all routes here
app.get('/', async (req, res) => {
	res.redirect("/events")
})

app.listen(PORT , () => {
	console.log(`Running on ${PORT}`)
});