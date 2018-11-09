// A function that utilizes recursion to find the factorial of a number
const factorialize = (factors, product = 1) => {
	if (factors < 1) return product;
	
	// return the function with the factor subtracted by 1 and the updated product
	// Also, multiply the product using multiple assignment 
	return factorialize(factors - 1, product *= factors); 
}

console.log(factorialize(5)); // 120
console.log(factorialize(10)); // 3628800
console.log(factorialize(20)); // 2432902008176640000
