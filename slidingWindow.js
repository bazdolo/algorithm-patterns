// not sliding window this is the naive approach SEE BELOW
maxSubArray = (arr, num) => {
	if (num > arr.length) {
		return null;
	}
	var max = -Infinity;
	// itertate over whole array
	for (let i = 0; i < arr.length - num + 1; i++) {
		let temp = 0;
		//iterate over subarray
		for (let j = 0; j < num; j++) {
			temp = temp + arr[i + j];
		}
		if (temp > max) {
			max = temp;
		}
	}
	return max;
};

// console.log(maxSubArray([ 5, 3, 8, 9, 1, 6 ], 3));

maxSubArrayEfficient = (arr, num) => {
	let maxSum = 0;
	let tempSum = 0;

	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}

	tempSum = maxSum;

	for (let i = num; i < arr.length; i++) {
		tempSum = tempSum - arr[i - num] + arr[i];
		if (tempSum > maxSum) {
			maxSum = tempSum;
		}
	}
	return maxSum;
};

console.log(maxSubArrayEfficient([ 5, 3, 8, 9, 1, 100 ], 3));
