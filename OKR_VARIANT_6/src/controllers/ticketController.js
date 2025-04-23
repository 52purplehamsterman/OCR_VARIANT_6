const ticketService = require('../services/ticketService');
const getAllTickets = (req, res) => {
  const tickets = ticketService.getAllTickets();
  res.status(200).json(tickets);
};
const getTicketById = (req, res) => {
  const { id } = req.params;
  const ticket = ticketService.getTicketById(id);

  if (ticket) {
    res.status(200).json(ticket);
  } else {
    res.status(404).json({ message: 'Ticket not found' });
  }
};
module.exports = {
  getAllTickets,
  getTicketById,
};