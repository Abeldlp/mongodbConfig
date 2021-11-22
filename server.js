const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//Initialize express
const app = express()

//Needed to be able to be called from outside the application
app.use(cors())
app.use(bodyParser.urlencoded({ extended : true }))

//import routes
const todosRouter = require('./Routes/todo')

//use the routes imported 
app.use('/todos', todosRouter)

//connection to database
mongoose.connect(
  "mongodb://localhost:27017/todoDatabase",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Database connected");
  }
);

//Seeting the port that I the backend to be working at
const PORT = 3000 | process.env.PORT

app.listen(PORT, () => {
  console.log('listening on port ' + PORT)
})
