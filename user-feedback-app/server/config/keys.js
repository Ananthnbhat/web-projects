
if (process.env.NODE_ENV === 'production') {
    //return prod keys
    module.exports = require('./prod-keys');
} else {
    //return dev keys
    module.exports = require('./dev-keys');
}

