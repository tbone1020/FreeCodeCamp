const confirmEnding = (str, target) => {
	// compare the end of the str variable using the length of target string
	// and the length of the main string 
	return str.substring(str.length - target.length) === target;
}

confirmEnding("Open sesame", "pen"); // false
confirmEnding("Congratulation", "on"); // true
confirmEnding("He has to give me a new name", "name"); // true
confirmEnding("Open sesame", "game"); // false