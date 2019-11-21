const express = require("express");
const router = express.Router();
const app = express();
const mongoose = require('./config/db')
app.use(express.json())

console.log("Hello world");
app.listen(3020, () => {
    console.log("server runing on port 3020")
})
app.use('/', require('./router'))


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("success")
});

// router.get('/getdata', (req, res) => {
//     res.send({
//         name: 'Khatumal',
//         center: 'SMIT',
//         city: 'karachi',
//         roll: 116,
//     })
// })



// fetch('http://localhost:3001/user/post', {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({name: "ghous",age: 20,school: "Saylani"})
//   })



// npm i -g nodemon