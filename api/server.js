const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const restrict = require('./middleware/restricted.js');

const usersRouter = require('./users/users-router')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/users', usersRouter);
// server.use('/api/owners', restrict, ownersRouter); // only logged-in owners should have access!

//api status check
server.get('/', (req,res)=>{
    res.status(200).json({api: "up and running!"})
})
//fallback error
server.use((err,req,res,next)=>{
    res.status(err.status || 500).json({serverError: "Oh no...", message: err.message, err})
})

module.exports = server;
