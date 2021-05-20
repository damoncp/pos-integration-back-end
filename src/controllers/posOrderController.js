const {
  BAD_REQUEST_ERROR,
  EMPTY_DATA_ERROR,
  INTERNAL_SERVER_ERROR,
} = require('../constants/errors');
const Errors = require('../utils/errorHandler');
const posOrderService = require('../services/posOrderService');

class PosOrderController {
  createOrder(req, res, next) {
    try {
      const { body } = req;
    
      if (body && body.data && Object.keys(body.data).length > 0) {
        const order = posOrderService.orderCreation(body);
 
        return res.status(201).send(order);
      } else {
        return Errors.errorResponse(res, 400, BAD_REQUEST_ERROR, EMPTY_DATA_ERROR);
      }
    } catch (error) {
      return Errors.errorResponse(res, 500, INTERNAL_SERVER_ERROR, error.message);
    }
  }
}

module.exports = new PosOrderController();
