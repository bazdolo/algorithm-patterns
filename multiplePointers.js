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

console.log(countUniqueValues([ 1, 1, 2, 2, 2, 4, 5, 5, 6 ]));
