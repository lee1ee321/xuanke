require('babel-polyfill');
var epartmentDB = require('./epartment');

epartmentDB.findAll().then(function(results){
    console.log(results)
}).catch(function(err){
    console.log(err);
})