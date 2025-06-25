const express = require("express")
const app = express()
const port = 4000

app.get("/signin",(request,respond)=>{
    respond.send("hi this is my node project signin")
})
app.get("/dashboard",(request,respond)=>{
    respond.send("this is dashboard")
})

let studentRecords = [
    {name: 'habeeblahi', age: 20, course: 'information system'},
    {name: 'abiodun', age: 20, course: 'economics'},
    {name: 'ginald', age: 20, course: 'business admin'},
    {name: 'caleb', age: 20, course: 'information system'},
    {name: 'taoreed', age: 20, course: 'mass com'},
]
app.get("/",(request,respond)=>{
    respond.send(studentRecords)
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
    
})