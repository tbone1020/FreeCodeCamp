/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
The returned value should be a number.
*/
const getIndexToIns = (arr, num) => {
	arr.push(num);
	return arr.sort((a,b)=>a-b).indexOf(num)
}

getIndexToIns([10, 20, 30, 40, 50], 30); // 2
getIndexToIns([10, 20, 30, 40, 50], 35); // 3