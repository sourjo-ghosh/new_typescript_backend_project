import express from "express"
const port = 3000;
const app = express()
app.get("/", (req:express.Request, res:express.Response)=>{
        return res.send("Hello World")
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})