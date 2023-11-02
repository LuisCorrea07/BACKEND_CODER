import express from 'express'
import handlebars from 'express-handlebars'
import usersRouter from './routes/users.routes.js'
import petsRouter from './routes/pets.routes.js'
import viewsRouter from './routes/views.routes.js'
import {__dirname} from './utils.js'


const PORT = 8080
const app = express()
app.use(express.json()),
app.use(express.urlencoded({extended: true}))

//Handlebars configurations
app.engine('handlebars', handlebars.engine())
app.set("views" , `${__dirname}/views`)
app.set("view engine" , 'handlebars')



//Views endpoint
app.use('/', viewsRouter)
//Users endpoint
app.use('/api/users', usersRouter)
//Pets endpoint
app.use('/api/pets', petsRouter)
//dinamic content services
app.use('/static', express.static(`${__dirname}/public`))


app.listen(PORT,() =>{
    console.log(`Service enable on port ${PORT}`)
})








//Application Middleware
/* app.use((req,res,next) => {
    console.log(Date.now())
    next()
})
 */