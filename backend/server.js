const express = require('express')
const cors = require('cors')
const axios = require('axios')


axios.get('https://wger.de/api/v2/exercise/?language=2')

    .then(response => {
        const exercises = response.data.results;

        console.log('List of exercises:');
        exercises.forEach(exercise => {
            console.log(exercise.name)
        })

        //console.log(response.data);  //make sure it was received
    })
    .catch(error => {
        console.log(error);
    });

require('dotenv').config()

const app = express()

const port = process.env.PORT || 5000
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())

const uri  = process.env.ATLAS_URI


mongoose.connect(uri, {useNewUrlParser: true,
    useUnifiedTopology: true,
    writeConcern: {
      w: "1",
      j: true
    }})

const connection = mongoose.connection

connection.once('open', ()=>{
    console.log("MongoDB database connection successfully established!")
})

const userRouter = require('./routes/workout_users')
app.use('/workout_users',userRouter)

app.listen(port, () => {
    console.log('server is running on port ${port}');
})

