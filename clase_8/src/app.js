import express from 'express'
import usersRouter from './routes/users.routes.js'
import petsRouter from './routes/pets.routes.js'
import {__dirname} from './utils.js'


const PORT = 8080
const app = express()
app.use(express.json()),
app.use(express.urlencoded({extended: true}))

app.use('/api/users', usersRouter)
app.use('/api/pets', petsRouter)
app.use('/static', express.static(`${__dirname}/public`))

//Application Middleware
/* app.use((req,res,next) => {
    console.log(Date.now())
    next()
})
 */
app.listen(PORT,() =>{
    console.log(`Service enable on port ${PORT}`)
})