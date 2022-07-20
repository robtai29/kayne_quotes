import axios from 'axios';
import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;
const URL = 'https://api.kanye.rest/';
//var cors = require('cors');


app.use(cors())
 

app.listen(PORT, () =>{
    console.log(`server listening on port ${PORT}`);
});

app.get("/quotes", 
async (req, res) =>{
    try{
    const response = await axios.get(URL);
    res.send(response.data);
    }catch(error){
        console.log(error);
    }
});

// axios.get(URL)
//   .then(function (response) {
//     // handle success
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     console.log("bye");
//   });

// import fetch from "node-fetch"
// const URL = "https://api.kanye.rest/";

// fetch(URL)
// .then(response => response.json())
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// });
