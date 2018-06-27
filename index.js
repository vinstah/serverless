/** 
 * Code based on https://serverless.com/blog/serverless-express-rest-api/
 * Requires serverless CLI set up (AWS CLI aswell) use aws https://aws.amazon.com/free/#AWS_FREE_TIER
 *
 */

const serverless = require('serverless-http');
const express = require('express');
var axios = require('axios');
const app = express();

// http://json-schema-faker.js.org/
// InnerReferences example
const userData = require('./data/users.json');

// Default page
app.get('/', (req, res) => {
  res.send(`<h1>Users API</h1><div><a href="users">View Api</a></div>`);
});

// localhost:3000/users/
app.get('/users', (req, res) => {
  res.json(userData);
});

// localhost:3000/users/62156
app.get('/users/:userId', function (req, res) {
  let requestedUser = userData.find(obj => { return obj.id === parseInt(req.params.userId, 10) });

  if (typeof requestedUser === 'object') {
    res.json(requestedUser)
  } else {
    res.status(404).json({ error: "User not found" })
  }
})

module.exports.handler = serverless(app);

// Block for function that works without express ( if you remove the app.get('/user') block of code)
// Using express allows you only need to push one function to AWS lambda
/*
module.exports.user = (event, context, callback) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        id: 1222,
        name: 'Clare Pickle',
        job: 'Earth Digger'
      }),
    };
  
    callback(null, response);
  
    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
  };
*/