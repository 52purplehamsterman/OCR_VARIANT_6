const express = require('express');
const ticketController = require('../controllers/ticketController');
const router = express.Router();
router.get('/tickets', ticketController.getAllTickets);
router.get('/tickets/:id', ticketController.getTicketById);

module.exports = router;