const { ApolloServer, gql } = require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const express = require('express');
const http = require('http');
var cors = require('cors')

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type NFT {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    nfts: [NFT]
  }
`;
const nfts = [
    {
        title: 'nft 1',
        author: 'I',
    },
    {
        title: 'nft 2',
        author: 'smb',
    },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        nfts: () => nfts,
    },
};

async function startApolloServer(typeDefs, resolvers, app) {

    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
        // graphiql: true,
    });

    await server.start();
    server.applyMiddleware({ app });
    const PORT = 4001;
    await new Promise(resolve => httpServer.listen({ port: PORT }, resolve));
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
}


// let mongoClient = require('mongodb').MongoClient
// const { url } = require('./password');
// const { response } = require('express');

// let database;
// mongoClient.connect(url, function (err, client) {
//     database = client.db("libraryFromNode")
//     console.log('mongo connected')
// })

const app = express();

app.use(cors())
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())


startApolloServer(typeDefs, resolvers, app)