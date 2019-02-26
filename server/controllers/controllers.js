const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    shop: function(req, res) {
        Product.find({}, function(err, products) {
            if (err) {
                console.log('Returned an error trying to get all products.');
                res.json({message: 'Error'}, err);
            } else {
                console.log('We got all the products successfuly');
                res.json(products);
            }
        })
    }
}