module.exports = require('mongoose').connect("mongodb://localhost/workout", {
 useNewUrlParser: true,
 useFindAndModify: false
});