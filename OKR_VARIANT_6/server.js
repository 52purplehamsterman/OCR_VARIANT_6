require('dotenv').config();
const express = require('express');
const ticketRoutes = require('./src/routes/ticketRoutes');

const app = express();
const PORT = process.env.PORT || 7485;
app.use(express.json());
app.use('/', ticketRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});