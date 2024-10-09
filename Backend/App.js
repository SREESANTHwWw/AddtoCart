const express = require('express')
const app = express()
const productRouter = require('./Router/route')
const port = 5050
const connectDB = require("./DB/Database")
require("dotenv").config();
const cors = require('cors')


app.use(cors())

app.get('/',(req,res)=>{
    res.send("home")
})

app.use(express.json())
app.use('/api/v1/product', productRouter)


const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(port,()=>{
            console.log(`Server Running Port ${port}`)
        })

    }catch(err){
        console.log(err)
    }

}
start()
