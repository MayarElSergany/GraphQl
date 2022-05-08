const { ApolloServer, gql } = require('apollo-server')
const { type } = require('os')
const posts = [{
    title: "post1",
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
          posts.push({ id: posts.length + 1, title });
          return posts[posts.length - 1];
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