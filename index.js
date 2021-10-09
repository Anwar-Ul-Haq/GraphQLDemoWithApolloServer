const { ApolloServer, gql , MockList} = require("apollo-server");

const typeDefs = gql`

    scalar Date
    
    """
     An Object that describes the characteristics of a programing day
    """
   type ProgrammingDay{
       "Unique identifier"
       id: ID!
       date:Date!
       "Programming language"
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
     date: Date!
     conditions: Conditions
 }

 type RemoveDayPayLoad{
     day:ProgrammingDay!
     remove:Boolean
     totalBefore:Int
     totalAfter:Int


 }

 type Mutation{
    addDay(input:AddDayInput) : ProgrammingDay
    removeDay(id:ID!):RemoveDayPayLoad!
 }
   
type Subscription{
    newDay:ProgrammingDay!


}
`;

const mocks = {
    Date: () => "1/2/2025",
    String: () => "Cool Data"
    
}

// const resolvers = {


// };

const server = new ApolloServer({

    typeDefs,
   // resolvers
    
    mocks
})

server.listen().then(({ url }) => console.log(`Server running  at ${url}`));