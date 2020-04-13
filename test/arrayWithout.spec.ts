import arrayWithout from './../src/arrayWithout';

describe('arrayWithout', () => {
	test('returns an array excluding given items', () => {
		const array = [1, 5, 3, 'a', 'thing'];
		const firstTest = arrayWithout(array, 5);
		const secondTest = arrayWithout(array, 3, 'thing', 1);

		expect(firstTest).toEqual([1, 3, 'a', 'thing']);
		expect(secondTest).toEqual([5, 'a']);
	});

	test('returns a new array', () => {
		const array = [1, 2];
		const newArray = arrayWithout(array, 2);

		expect(array === newArray).toBe(false);
	});

	test('doesn\'t change the initial array', () => {
		const array = [1, 2];
		const newArray = arrayWithout(array, 2);

		expect(array).toEqual([1, 2]);
	});
});
