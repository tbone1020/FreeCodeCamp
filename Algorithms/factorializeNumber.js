// Return the factorial of the provided integer.
const factorialize = (factors, product = 1) => {
	if (factors < 1) return product;

	// multiply the product using multiple assignment
	product *= factors; 
	
	// return the function with the factor minus 1 and the updated product
	return factorialize(factors - 1, product); 
}

factorialize(5); // 120
factorialize(10); // 3628800
factorialize(20); // 2432902008176640000