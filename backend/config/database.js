const mongoose=require("mongoose")
require("dotenv").config();

 exports.connectDB = () => {
  mongoose.connect(process.env.MONGODB_URL)
  .then(console.log(`DB connection Success`))
  .catch((err)=>{
    console.log(`DB connection failed`)
    console.log(err.message)
    process.exit(1);
  })
} 



