const express = require('express');
const router = express.Router();

const posOrderController = require('../controllers/posOrderController');

// POST client order route
router.post('/api/orders/new', posOrderController.createOrder);

module.exports = router;
