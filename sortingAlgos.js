function bubbleSort(arr) {
	var noSwaps = true;
	for (let i = arr.length; i > 0; i--) {
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}

	return arr;
}

// console.log(bubbleSort([ 4, 1, 6, 2, 9, 7, 4, 3 ]));

selectionSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		var lowest = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[lowest]) {
				lowest = j;
			}
		}
		if (i !== lowest) {
			let temp = arr[i];
			arr[i] = arr[lowest];
			arr[lowest] = temp;
			console.log(arr);
		}
	}
	return arr;
};

// selectionSort([ 3, 6, 1, 9, 4, 7 ]);

function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		var currentVal = arr[i];
		console.log(currentVal);

		let j = 0;
		for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = currentVal;
	}

	return arr;
}

// insertionSort([ 2, 1, 8, 78, 5 ]);

function merge(arr1, arr2) {
	let results = [];
	let i = 0;
	let j = 0;

	while (i < arr1.length && j < arr2.length) {
		if (arr2[j] > arr1[i]) {
			results.push(arr1[i]);
			i++;
		} else {
			results.push(arr2[j]);
			j++;
		}
	}
	while (i < arr1.length) {
		results.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		results.push(arr2[j]);
		j++;
	}
	return results;
}
function mergeSort(arr) {
	if (arr.length <= 1) return arr;

	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	return merge(left, right);
}

// console.log(mergeSort([ 4, 7, 6, 1, 5, 4, 13 ]));

function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		let pivotIndex = pivot(arr, left, right);
		//left
		quickSort(arr, left, pivotIndex - 1);
		//right
		quickSort(arr, pivotIndex + 1, right);
	}
	return arr;
}

function pivot(arr, start = 0, end = arr.length - 1) {
	function swap(array, i, j) {
		let temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	let pivot = arr[start];
	let swapIdx = start;

	for (let i = start + 1; i <= end; i++) {
		if (pivot > arr[i]) {
			swapIdx++;
			swap(arr, swapIdx, i);
		}
	}
	swap(arr, start, swapIdx);
	return swapIdx;
}

console.log(quickSort([ 4, 8, 1, 5, 7, 6, 3 ]));
