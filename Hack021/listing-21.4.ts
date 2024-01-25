const http = require('http');
const { graphqlHTTP } = require('graphql-http');

const server = http.createServer((req, res) => {
  if (req.url === '/graphql' && req.method === 'POST') {
    return graphqlHTTP({ schema, rootValue: rootResolver })(req, res);
  }

 res.writeHead(404);
  res.end();
});

server.listen(4000);
console.log('GraphQL Server läuft auf http://localhost:4000/graphql');
