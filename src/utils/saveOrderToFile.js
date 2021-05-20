const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

module.exports = (order) => {
  // In this task (demo only). For production level code, we should connect it to database
  try {
    fs.readFile('mockDB.json', (error, records) => {
      if (error) return error;
      const ordersInJson = JSON.parse(records);
      ordersInJson.orders[uuidv4()] = order;

      fs.writeFile('mockDB.json', JSON.stringify(ordersInJson, null, 2), (error) => {
        if (error) return error;
        return ;
      });
    });
  } catch (error) {
    return error;
  }
};
