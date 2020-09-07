uniqueCharsInString = (str) => {
	const trimmedStr = str.replace(/ /g, '').toLowerCase();
	let uniqueChars = {};
	for (let i = 0; i < trimmedStr.length; i++) {
		uniqueChars[trimmedStr[i]] = 1;
	}
	return Object.keys(uniqueChars).length - 1;
};

// console.log(uniqueCharsInString('Hello there!'););

charCount = (str) => {
	var result = {};

	for (var char of str) {
		char = char.toLowerCase();
		if (/[a-z0-9]/.test(char)) {
			result[char] = result[char] + 1 || 1;
		}
	}
	return result;
};

console.log(charCount('hello there again'));
