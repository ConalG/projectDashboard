const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

app.use('/dashboard'.graphqlHTTP({

}));

app.listen(8000,() => {
    console.log('Lisening');
})

