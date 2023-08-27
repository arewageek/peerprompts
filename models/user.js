import { Schema, model, models } from "mongoose";

const UserSchema = Schema({
    email: {
        type: String,
        unique: [ true, 'Email address already exists!' ],
        required: [ true, 'Email address is required' ]
    },
    usernaem: {
        type: String,
        required: [ true, 'Username is required' ]
    },
    image: {
        type: String,
    }
})

const User = models.User || model('User', UserSchema)

export default User;