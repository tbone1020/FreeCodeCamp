/*
Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number.
*/
function repeatStringNumTimes(str, num) {
	if(num < 1) return "";
	let repeatStr = "";
	for(let i = 0;i < num;i++) {
		repeatStr += str;
	}
	return repeatStr;
}

repeatStringNumTimes("abc", 3); // "abcabcabc"
repeatStringNumTimes("*", 8); // "********"
repeatStringNumTimes("abc", -2); // ""