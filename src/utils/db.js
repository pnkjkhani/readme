const mongoose = require('mongoose');
const connectDb = async ()=>{
  try {
    // console.log(process.env.MONGO)
    await mongoose.connect(process.env.LOCAL);
    console.log("success to connect")
  } catch (error) {
    console.log(error)
    throw new Error(error);
  }
}
export default connectDb;