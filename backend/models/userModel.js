import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },

    age: {
        type: Number,
        default: 0,
        // required: true,
    },

    income: {
        type: Number,
        required: false,
    },

    expenses: {
        type: Number,
        required: false,
    },

    savings: {
        type: Number,
        required: false,
    },

    lib: {
        type: Number,
        required: false,
    },

    assets: {
        type: Number,
        required: false,
    },

    token: {
        type: String,
        required: false,
    },
});

const User = mongoose.model("User", userSchema);

export default User;

// email: {
//   type: String,
//   required: true,
//   unique: true,
// },
