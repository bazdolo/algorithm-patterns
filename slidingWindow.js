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

// console.log(maxSubArrayEfficient([ 5, 3, 8, 9, 1, 100 ], 3));

const maxSubarraySum = (arr, num) => {
	if (arr.length < num) {
		return null;
	}

	let maxSum = 0;
	let tempSum = 0;

	for (let i = 0; i < num; i++) {
		maxSum = maxSum + arr[i];
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

// console.log(maxSubarraySum([ 3, -2, 7, -4, 1, -1, 4, -2, 1 ], 2));
//[ 2, 3, 1, 2, 4, 3 ]
const minSubArrayLen = (nums, sum) => {
	let total = 0;
	let start = 0;
	let end = 0;
	let minLen = Infinity;

	while (start < nums.length) {
		if (total < sum && end < nums.length) {
			total = total + nums[end];
			end++;
		} else if (total >= sum) {
			minLen = Math.min(minLen, end - start);
			total = total - nums[start];
			start++;
		} else {
			break;
		}
	}

	return minLen === Infinity ? 0 : minLen;
};

// console.log(minSubArrayLen([ 2, 3, 1, 2, 4, 3 ], 7));

findLongestSubstring = (str) => {
	let longest = 0;
	let seen = {};
	let start = 0;

	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		if (seen[char]) {
			start = Math.max(start, seen[char]);
		}

		longest = Math.max(longest, i - start + 1);
		seen[char] = i + 1;
	}
	return longest;
};

// findLongestSubstring('thisisawesome');

const findLongestSubstringAlt = (str) => {
	let left = 0;
	let right = 0;
	let longest = 0;
	let checker = {};

	while (right < str.length) {
		let char = str[right];

		if (char in checker) {
			delete checker[str[left]];
			left++;
		} else {
			checker[char] = 1;
			longest = Math.max(longest, Object.keys(checker).length);
			right++;
		}
	}
	console.log(checker);
	return longest;
};

console.log(findLongestSubstringAlt(''));
