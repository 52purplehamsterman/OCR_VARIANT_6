const db = require('../db/db');
const getAllTickets = () => {
  return db.data.tickets;
};
const getTicketById = (id) => {
  return db.data.tickets.find((ticket) => ticket.id === id);
};

module.exports = {
  getAllTickets,
  getTicketById,
};