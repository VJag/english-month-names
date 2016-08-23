var months = require('./month-names.json');
var uniqueRandomArray = require('unique-random-array'); 

module.exports={
	all : months,
	random : uniqueRandomArray(months)
};