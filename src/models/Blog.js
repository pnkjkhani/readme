import mongoose from "mongoose";
const { Schema } = mongoose;

const BlogSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        require: true,
    },
    img: {
        type: String,
    },
    content: {
        type: String,
        require: true,
    },

    username: {
        type: String,
    },
    useremail: {
        type: String,
        require: true,
    },
    userprofilepic: {
        type: String,
    },
},
    { timestamps: true });
mongoose.models = {}
export default mongoose.model("Blog", BlogSchema);
