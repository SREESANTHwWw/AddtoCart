const mogoose = require('mongoose')

const modelSchema = new mogoose.Schema({
    name:{
        type:String,
        required:[true, "Must Provide Product Name" ],
        trim:true,
        maxlength:[20 , "More Than 20 Characters"]
    },
    quantity:{
        type:Number,
        default:1
    },
    price:{
        type:Number,
        maxlength:7
    },
    supplier:{
      type:String,
      required:[true,"Must provide Supplier Name"],
      trim:true,
      maxlength:[20, "More Than 20 Character"]
    }
   
  
      

});

module.exports = mogoose.model('Products', modelSchema)

