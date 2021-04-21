const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const productSchema = new Schema({


    // id: {
    //     type:String,
    //     required:true
    // },
    
"name": {
    type:String,
    required:true},

    "Company": {
    type:String,
    required:true
},
"Price": {
    type:String,
    required:true
},
"Product-picture-Link": {
    type:String,
    required:true
},"Link-shop": {
    type:String,
    required:true

}
},{timestamps:true})

const Product = mongoose.model("Product",productSchema)

module.exports = Product