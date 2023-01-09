import express from "express";
import mongoose from 'mongoose'
import cors from 'cors'

import routes from './routes/index'

const app = express()
const PORT = 8000

const {
    MONGODB_ATLAS_USERNAME,
    MONGODB_ATLAS_PASSWORD,
    MONGODB_ATLAS_DBNAME
} = process.env

const uri =  `mongodb+srv://${MONGODB_ATLAS_USERNAME}:${MONGODB_ATLAS_PASSWORD}@cluster0.wwqbf.mongodb.net/${MONGODB_ATLAS_DBNAME}?retryWrites=true&w=majority`
const options = {useNewUrlParser: true, useUnifiedTopology: true}

//if want to use local mongo
// const local = "mongodb://localhost:27017/tsTodo"

app.use(cors())
app.use(routes)

mongoose.set('useFindAndModify', true)
mongoose.connect(uri, options)
 .then(()=>{
    app.listen(PORT, ()=>{
        console.info(`server has running at http://localhost:${PORT}`)
    })
 }).catch(err=>{
    throw err
 })

