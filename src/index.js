const { GraphQLServer } = require('graphql-yoga')
const resolvers = require('./resolvers')
const path = require('path')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/graphql', {useNewUrlParser: true}, () => console.log('MongoDB connected'))

const server = new GraphQLServer({ typeDefs: path.resolve(__dirname, 'schema.graphql'), resolvers })
server.start(() => console.log('Server is running on localhost:4000'))