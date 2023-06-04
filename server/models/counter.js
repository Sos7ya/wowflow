import mongoose from "mongoose";

const counterSchema = mongoose.Schema({
    percent15first: Number,
    percent10second: Number,
    percent15second: Number,
    percent1210: Number,
    promo1000: Number,
    promo2000: Number,
    promo3000: Number,
    promo4000: Number,
})

const Counter = mongoose.model('Counter', counterSchema);

export default Counter;