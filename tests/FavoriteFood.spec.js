describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');

	}));

	it('should choose filter on favorite food correctly', function(){
		var mockedList = [
			{favoriteFood: 'bread'},
			{favoriteFood: 'milk'}
		];

		var results = $filter('favoriteFood')(mockedList, 'milk')

		expect(results.length).toBe(1);
		expect(results[0].favoriteFood).toBe('milk');
	})
	
});
