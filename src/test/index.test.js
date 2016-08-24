var monthNames=require('../index');
var expect = require('chai').expect;

describe('Month names', function() {

	describe('all', function() {

		it('all should be an array of strings', function() {	
			expect(monthNames.all).to.satisfy(isArrayOfStrings);

			function isArrayOfStrings(array) {
				return array.every(function(item) {
					return typeof item === 'string';
				});
			}
		});

		it('Should have January', function() {
			expect(monthNames.all).to.include('January');
		});
	});

	describe('random', function() {
		it('should return a random item from monthnames.all', function() {
			var randomMonth = monthNames.random();
			expect(monthNames.all).to.include(randomMonth);
		});
	});		
});