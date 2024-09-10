const express = require('express');
const upload = require('./controllers/user.controller');

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) =>{
    res.send("Welcome to the API!");
})
app.post('/upload',upload.single('img') , (req, res) =>{
    res.send("image uploaded successfully!");
});
app.listen(8090,()=>{
    console.log("listening on port 8090");
})