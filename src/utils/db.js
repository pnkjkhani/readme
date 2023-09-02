const mongoose = require('mongoose');
const connectDb = async ()=>{
  try {
    // console.log(process.env.MONGO)
    mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.MONGO);
    // console.log("success to connect")
  } catch (error) {
    // console.log(error)
    throw new Error(error);
  }
}
export default connectDb;