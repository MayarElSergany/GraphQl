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
}`

const resolvers = {
    Query: {
        posts: () => posts
    }
}

const server = new ApolloServer({
    resolvers,
    typeDefs
})

server.listen(8000, () => {

})