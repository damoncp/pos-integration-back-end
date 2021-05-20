const { v4: uuidv4 } = require('uuid');
const { INVALID_TOTAL_VALUE_ERROR } = require('../constants/errors');
const saveOrderToFile = require('../utils/saveOrderToFile');

class PosOrderService {
  orderCreation(requestBody) {
    const items = Object.values(requestBody.data);
    // save request body into a json file as a temporary data store
    const order = {
      id: uuidv4(),
      orderDetails: items,
      total: requestBody.total,
    }
    // write order record into a json file (task requirement)
    if (order && order.total > 0) {
      saveOrderToFile(order);
      return order;
    }

    throw new Error(INVALID_TOTAL_VALUE_ERROR);
  }
}

module.exports = new PosOrderService();
