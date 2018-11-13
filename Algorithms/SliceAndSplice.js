/*
You are given two arrays and an index.
Use the array methods slice and splice to copy each element of the first array into the second array, in order.
Return the resulting array. The input arrays should remain the same after the function runs.
*/
function frankenSplice(arr1, arr2, n) { 
	let copy = arr2.slice();
	for (let i = 0; i < arr1.length; i++) {
		copy.splice(n++, 0, arr1[i]);
	}
	return copy;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)); // [4, 1, 2, 3, 5, 6]
