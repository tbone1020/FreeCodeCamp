// Reverse the provided string.
const reverseString = str => {
    let revStr = ""; // create an empty string

    // Loop from the end of the string to the beginning
    for (let i = str.length - 1; i >= 0; i--) {
    	// Add each letter to the revStr
     	revStr += str[i];
    }
    
    return revStr;
}

reverseString("hello"); // olleh
reverseString("This is a string"); // gnirts a si sihT
