import mongoose from "mongoose";

const promocodeSchema = mongoose.Schema({
    promocode: String,
    discription: String,
    chance: mongoose.Decimal128,
    type: String
})

const Promocode = mongoose.model('Promocode', promocodeSchema);

export default Promocode;