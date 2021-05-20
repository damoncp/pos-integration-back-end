# POS Integration Demo (Back-end)

### How to start app

```js
// Install npm packages
npm install

// Run app locally
npm run dev

// Command for running tests
npm run test
```


### Code implementation & Core knowledge points (covered)

1. Using `controller` and `service` layers write API,
  - `controller` layer: to call service function to handle API response
  - `service` layer: to extract core business logic into service layer to

2. Install `CORS` package to avoid `CORS` issue for local development environment

3. Written an independent functionality (`saveOrderToFile.js`) to save dat into a json file and using `mockDB.json` to save the user API request results

4. Saved data as `object` structure instead of `array` structure, 

  - Reason: Assuming later we need to do filtering functionality for the entire orders list, so we can we can directly find data by hash-key (`orders[order_id]`) instead of traversing (`for loop`) the entire array, more efficiently for retrieving data especially for front-end


### Future improvements

1. Need to write `1 command` to start back-end and front-end together (maybe `concurrently` or write a `make` file)

2. Might require to connect with database (eg: non-relational or relational databases), and later once we connect with database, we probably need to create `DAL` (Data Access Layer) for accessing the database data easily


### References

1. Compare Data Structure in JavaScript <a href="https://soshace.com/comparing-data-structures-in-javascript-arrays-vs-objects/" target="_blank">here</a>

2. Better error handlings for NodeJS <a href="https://www.smashingmagazine.com/2020/08/error-handling-nodejs-error-classes/" target="_blank">here</a>
