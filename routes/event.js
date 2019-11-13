const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

router.get('/', async (req, res) => {
	try{
		const allEvents = await Event.find();
		res.json(allEvents.length === 0? "Events list is empty": allEvents)
	}catch(err){
		res.json({message: err})
	}
})

router.get('/:eventID', async (req, res) => {
	try{
		const event = await Event.findById(req.params.eventID);
		console.log(event)
		res.json(event === null? "Event not found": event)
	}catch(err){
		res.json({message: err})
	}
})
router.post('/', async (req, res) => {
	console.log(req.body)
	const event = new Event({
		title: req.body.title,
		description: req.body.description,
		reportedBy: req.body.reportedBy,
		handledBy: req.body.handledBy,
		completed: req.body.completed,
		dateReported: req.body.dateReported
	})

	try{
		const savedData = await event.save()
		res.json(savedData)
	}catch(err){
		res.json({message: err})
	}
})
router.delete('/:eventID', async (req, res) => {
	try{
		const deletedEvent = await Event.findByIdAndDelete(req.params.eventID);
		res.json({msg: "deleted event", deleted: deletedEvent})
	}catch(err){
		res.json({message: err})
	}
})
router.patch('/:eventID', async (req, res) => {
	try{
		const updatedEvent = await Event.findByIdAndUpdate({"_id":req.params.eventID} , {"title": "UPDATED"});
		res.json("Item Updated")
	}catch(err){
		res.json({message: err})
	}
})

module.exports = router
