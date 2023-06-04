import mongoose from "mongoose";

const userDataSchema = mongoose.Schema({
    ip: String,
    id: String,
    playedAt: {
        type: Date,
        default: new Date(0)
    }
})

const UserData = mongoose.model('UserData', userDataSchema);

export default UserData;