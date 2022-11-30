require('dotenv').config()
const express = require('express')

const app = express()
const PORT = process.env.PORT || 8000
const cors = require('cors')
const cookieSession = require('cookie-session')
const passportStrategy = require('./passport')
const passport = require('passport')
const authRoute = require('./routes/auth')

app.use(cookieSession({name:  'session',keys:  ['deepak'],maxAge: 24 * 60 * 60 * 100}));

app.use(passport.initialize())

app.use(passport.session())

app.use(
    cors({
        origin : 'http://localhost:3000',
        methods  :"GET, POST, PUT, DELETE ",
        credentials : true
    })
)

app.use('/auth', authRoute)

app.get('/',(req,res)=>{
    res.send('Hello')
})

app.listen(PORT, ()=>{
    console.log(`Server started at Port ${PORT}`)
})