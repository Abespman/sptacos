const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {type: String, required: true},
    photo_url: {type: String},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    quantity: {type: Number, required: true}
}, {timeStamps: true})
mongoose.model('Product', ProductSchema);

const UserSchema = new mongoose.Schema({
    first_name: {type: String, require: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    address: {type: String, required: true},
    unit: {type: String},
    city: {type: String, required: true},
    state: {type: String, required: true},
    zip: {type: Number, required: true}
}, {timestamps: true})
mongoose.model('User', UserSchema);