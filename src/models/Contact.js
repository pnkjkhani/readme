import mongoose from "mongoose";
const { Schema } = mongoose;

const ContactSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
    },
    subject: {
        type: String,
    },
    body: {
        type: String,
        require: true,
    },
},
    { timestamps: true });
mongoose.models = {}
export default mongoose.model("Contact", ContactSchema);
