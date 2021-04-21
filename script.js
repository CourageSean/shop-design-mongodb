const express = require('express');
const mongoose = require("mongoose")
const PORT = process.env.PORT || 3004
const dbURI = `mongodb+srv://sean:badnewzzmp23@nodemailer.glt2i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const database = "Nodemail"
const Product = require("./models/product")


const app = express()
// console.log(data);

//connecting to db



mongoose.connect(dbURI,{useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify: false })
.then((result) =>app.listen(PORT,() => {
    console.log("listening port 3004")
    Product.find()
    .then((result) => {
      console.log(result)
    } ).catch((err) => {
      console.log(err)
    })
  }))
 .catch((err) => {
   console.log(err)
 })





 




  


app.use(express.static('public'))
app.set('view engine', 'ejs')
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
// parse application/json
app.use(express.json())
app.get('/', (req, res) => {
    Product.find()
    .then((result) => {
        res.render('pages/index',{result})
    } ).catch((err) => {
      console.log(err)
    })

   
})

app.get("/product/:id",(req,res) => {
    const id = req.params.id
  
    Product.findById(id)
    .then((data) => {
        res.render('pages/productDetail',{data})
        console.log(data)
    } ).catch((err) => {
      console.log(err)
    })


})