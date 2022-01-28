const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: Number,
            default: 0,
        },
        movie: {
			type: ObjectId,
			ref: 'Movie',
			required: true,
		},
    },
    { timestamps: true }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;