const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`

   type ProgrammingDay{
       id: ID!
       date:String!
       language:String!
       conditions: Conditions
           
   }

   enum Conditions{
       IF
       SWITCH
       FOR
       IFELSE
   }


 type Query{
  totalDays:Int!
  allDays:[ProgrammingDay!]!


 }

 input AddDayInput {
     date: String!
     conditions: Conditions
 }

 type Mutation{
    addDay(input:AddDayInput) : ProgrammingDay
    removeDay(id:ID!):ProgrammingDay
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