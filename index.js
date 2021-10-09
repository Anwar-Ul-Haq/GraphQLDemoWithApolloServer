const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`

 type Query{
  totalDays:Int!


 }
   

`;

// const resolvers = {


// };

const server = new ApolloServer({

    typeDefs,
   // resolvers
    
    mocks:true
})

server.listen().then(({ url }) => console.log(`Server running  at ${url}`));