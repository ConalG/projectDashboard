const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/dashboard', graphqlHTTP({
    schema

}));

app.listen(8000,() => {
    console.log('Lisening');
})

