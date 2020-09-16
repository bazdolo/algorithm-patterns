function countDown(num) {
	if (num <= 0) {
		console.log('alldone');

		return;
	}
	console.log(num);
	num--;
	countDown(num);
}

// countDown(5);

function sumRange(num) {
	if (num === 1) return 1;
	num = num + sumRange(num - 1);

	return num;
}

// console.log(sumRange(2));

function factorial(num) {
	if (num === 0) return 1;
	return num * factorial(num - 1);
}

// console.log(factorial(4));

function collectOddValues(arr) {
	let result = [];

	function helper(helperInput) {
		if (helperInput.length === 0) {
			return;
		}
		if (helperInput[0] % 2 !== 0) {
			result.push(helperInput[0]);
		}
		helper(helperInput.slice(1));
	}

	helper(arr);

	return result;
}

// console.log(collectOddValues([ 1, 2, 3, 4, 5, 6, 7 ]));

function productOfArray(arr) {
	if (arr.length === 0) return 1;

	return arr[0] * productOfArray(arr.slice(1));
}

// console.log(productOfArray([ 1, 2, 3, 10 ]));

function recursiveRange(num) {
	if (num === 0) return 0;

	return num + recursiveRange(num - 1);
}

// console.log(recursiveRange(10));

function memoize(fn) {
	const cache = {};
	return function(...args) {
		// console.log(this);
		if (cache[args]) {
			return cache[args];
		}
		console.log(cache);

		const result = fn.apply(this, args);
		cache[args] = result;
	};
}

function fib(n) {
	if (n <= 2) {
		return 1;
	}
	//prettier-ignore
	n = fib(n - 1) + 
	fib(n - 2);

	return n;
}

const fibber = memoize(fib);
console.log(fibber(6));

function reverse(str) {
	let revStr = '';

	function helper(input) {
		if (input.length === 0) {
			return;
		}
		revStr = revStr + input[input.length - 1];
		helper(input.slice(0, -1));
	}

	helper(str);
	return revStr;
}

// reverse('awesome');
