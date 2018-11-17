/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
The lowest number will not always come first.
*/

function sumAll(arr) {
	let maxNum = Math.max(...arr);
	let minNum = Math.min(...arr);
	let sum = 0;
	for(let i = minNum;i<=maxNum;i++){
		sum += i;
	}
	return sum;
}

console.log(sumAll([1, 4]));