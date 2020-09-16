const sumZero = (arr) => {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		let sum = arr[left] + arr[right];
		if (sum === 0) {
			return [ arr[left], arr[right] ];
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}
	return false;
};

// console.log(sumZero([ -5, -3, -2, -1, 1, 4, 6 ]));

const countUniqueValues = (arr) => {
	let firstPointer = 0;
	for (let secondPointer = 1; secondPointer < arr.length; secondPointer++) {
		if (arr[firstPointer] !== arr[secondPointer]) {
			firstPointer++;
			arr[firstPointer] = arr[secondPointer];
		}
	}
	return firstPointer + 1;
};

// console.log(countUniqueValues([ 1, 1, 2, 2, 2, 4, 5, 5, 6 ]));

const averagePair = (arr, number) => {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		let tempAverage = (arr[left] + arr[right]) / 2;
		console.log(tempAverage);
		if (tempAverage === number) {
			return true;
		} else if (tempAverage > number) {
			right--;
		} else {
			left++;
		}
	}
	return false;
};

// console.log(averagePair([ 1, 3, 3, 5, 6, 7, 10, 12, 19 ], 8));

const areThereDuplicates = (...args) => {
	args.sort();

	let start = 0;
	let next = 1;

	while (next < args.length) {
		if (args[start] === args[next]) {
			return true;
		}
		start++;
		next++;
	}
	return false;
};

// console.log(areThereDuplicates('a', 'c', 'b', 't', 'u', 'l'));

const isSubsequence = (sub, str) => {
	let subPointer = 0;
	let strPointer = 0;

	let tempStr = '';

	while (strPointer < str.length) {
		if (str[strPointer] === sub[subPointer]) {
			tempStr = tempStr + sub[subPointer];
			subPointer++;
		}
		strPointer++;
	}
	if (sub === tempStr) {
		return true;
	} else {
		return false;
	}
};

console.log(isSubsequence('abc', 'abracadabra'));
