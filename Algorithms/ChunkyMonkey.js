// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
	let final = [];
	while(arr.length){
		final.push(arr.splice(0,size));
	}
	return final;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2); // [[0, 1], [2, 3], [4, 5], [6, 7], [8]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); // [[0, 1], [2, 3], [4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); // [[0, 1, 2, 3], [4, 5, 6, 7], [8]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); // [[0, 1], [2, 3], [4, 5]]
