const express = require('express');
const {buildSchema} = require('graphql');
const { graphqlHTTP } = require('express-graphql');

// Make an instance from express server and define constant paths
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let schema = buildSchema(`
    type RootQuery {
        events: [String!]!
    }
    type RootMutation{
        createEvent(name:String): String
    }
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);

app.use('/graphql',graphqlHTTP({
    schema,
    rootValue: {
        events: () => {
            return ["hello","hiiiiii","mwwwwww"];
        },
        createEvent: (args) => {
            return args.name;
        }
    },
    graphiql: true,
}));

module.exports = app;
