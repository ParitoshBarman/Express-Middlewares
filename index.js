const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const path = require('path');


const app = express();

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'src', 'access.log'), { flags: 'a' });


app.use(morgan(':method :url :status :res[content-length] - :response-time ms :date HTTP/:http-version', { stream: accessLogStream }));

app.get("/", (req, res)=>{
    res.status(200).json({message:"Hello world"});
})


  
  app.get('/get-users', (req, res) => {
    res.status(200).json({ users: ["user1", "user2", "user3"] });
  });
  
  app.post('/add-user', (req, res) => {
    res.status(201).send('User added successfully!');
  });
  
  app.put('/user/:id', (req, res) => {
    res.status(201).send(`User with ID ${req.params.id} updated successfully!`);
  });
  
  app.delete('/user/:id', (req, res) => {
    res.send(`User with ID ${req.params.id} deleted successfully!`);
  });





app.listen(8080, ()=>{
    console.log("Server is listening 8080 port...")
})