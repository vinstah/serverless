/** 
 * Code based on https://serverless.com/blog/serverless-express-rest-api/
 * Requires serverless CLI set up (AWS CLI aswell) use aws https://aws.amazon.com/free/#AWS_FREE_TIER
 *
 */

// Block for function that works without express ( if you remove the app.get('/user') block of code)
// Using express means you only need to push one function to AWS lambda
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

const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`<h1>Users API</h1><div><a href="users">View Api</a></div>`);
});

app.get('/users', (req, res) => {
    res.send(JSON.stringify({
        id: 1222,
        name: 'Clare Pickle',
        job: 'Earth Digger'
      }));
});
module.exports.handler = serverless(app);
