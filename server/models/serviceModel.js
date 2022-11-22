const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter service name"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please enter service description"]
    },
    highlights: [
        {
            type: String,
        }
    ],
    specifications: [
        {
            title: {
                type: String,
            },
            description: {
                type: String,
            }
        }
    ],
    location: {
        type: String,
        required: [true, "Please enter service location"]
    },
    price: {
        type: Number,
        required: [true, "Please enter service cost"]
    },
    images: [
        {
            public_id: {
                type: String
            },
            url: {
                type: String
            }
        }
    ],
    category: [
        {
            type: String,
            required: [true, "Please enter service category"]
        }
    ],
    availableSlots: {
        type: Number,
        required: [true, "Please enter service slots"],
        maxlength: [4, "slots cannot exceed limit"],
        default: 1
    },
    ratings: {
        type: Number,
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: "User",
                required: true
            },
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Service', serviceSchema);