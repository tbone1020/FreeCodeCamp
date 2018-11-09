/*
Check if a string (first argument, str) ends with the given target string (second argument, target).
This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, 
we would like you to use one of the JavaScript substring methods instead.
*/
const confirmEnding = (str, target) => {
	// compare the end of the str variable using the length of target string
	// and the length of the main string 
	return str.substring(str.length - target.length) === target;
}

confirmEnding("Open sesame", "pen"); // false
confirmEnding("Congratulation", "on"); // true
confirmEnding("He has to give me a new name", "name"); // true
confirmEnding("Open sesame", "game"); // false