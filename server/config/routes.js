const controllers = require('./../controllers/controllers.js');

module.exports = function(app) {
    app.get('/api/shop', controllers.shop);
}