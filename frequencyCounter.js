function same(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};
	for (let val of arr1) {
		frequencyCounter1[val] = frequencyCounter1[val] + 1 || 1;
	}
	for (let val of arr2) {
		frequencyCounter2[val] = frequencyCounter2[val] + 1 || 1;
	}
	console.log(frequencyCounter1);
	console.log(frequencyCounter2);
	for (const key in frequencyCounter1) {
		if (!(key ** 2 in frequencyCounter2)) {
			return false;
		}
		if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
			return false;
		}
	}

	return true;
}

// console.log(same([ 1, 2, 3, 4, 4, 1 ], [ 1, 4, 9, 16, 16, 1 ]));

const validAnagram = (str1, str2) => {
	if (str1.length !== str2.length) {
		return false;
	}

	let anagram1 = {};
	let anagram2 = {};

	for (const key of str1) {
		anagram1[key] = anagram1[key] + 1 || 1;
	}
	for (const key of str2) {
		anagram2[key] = anagram2[key] + 1 || 1;
	}
	console.log(anagram1);
	for (const key in anagram1) {
		if (!anagram2.hasOwnProperty(key)) {
			return false;
		}
		if (anagram1[key] !== anagram2[key]) {
			return false;
		}
	}
	return true;
};

// console.log(validAnagram('aaz', 'zza'));

const sameFrequency = (num1, num2) => {
	if (num1.toString().length !== num2.toString().length) {
		return false;
	}
	let numObj1 = {};

	for (const key of num1.toString()) {
		numObj1[key] = numObj1[key] + 1 || 1;
	}

	for (const key of num2.toString()) {
		if (!numObj1[key]) {
			console.log('called');
			return false;
		} else {
			numObj1[key] = numObj1[key] - 1;
		}
		console.log(numObj1);
	}
	return true;
};

console.log(sameFrequency(22, 2222));
