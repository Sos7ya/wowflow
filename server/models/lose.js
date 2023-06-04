import mongoose from "mongoose";

const loseSchema = mongoose.Schema({
    text: String,
    text1: String,
    title: String
})

const Lose = mongoose.model('Lose', loseSchema);

export default Lose;