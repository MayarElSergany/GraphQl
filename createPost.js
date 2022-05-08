const { ApolloServer, gql } = require('apollo-server')
const { type } = require('os')
const posts = [{
    tittle: "post1",
    id: "1"
},
{
    title: "post2",
    id: "2"
}
]

const typeDefs = gql`
type Post{
    id:String,
    title:String,
}
type Query{
    posts:[Post]
}
type Mutation{
    createPost(title:String!):Post
}`


const resolvers = {
    Query: {
        posts: () => posts
    },
    Mutation: {
        createPost: ( __, { title }) => {
          allPosts.push({ id: allPosts.length + 1, title });
    
          return allPosts[allPosts.length - 1];
        },
    }
  
}

const server = new ApolloServer({
    resolvers,
    typeDefs
})

server.listen(8000, () => {
console.log("Server has started on port 8000");
})