import mongoose from "mongoose";

const winSchema = mongoose.Schema({
    title: String,
    text: String
})

const Win = mongoose.model('Win', winSchema);

export default Win;