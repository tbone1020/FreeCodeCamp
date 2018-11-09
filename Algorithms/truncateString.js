/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending.
*/
const truncateString = (str, num) => {
  if(num >= str.length) return str;
	// Grap the substring from 0 up to num and append the ellipsis 
  return str.substring(0,num) + "...";
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); // A-tisket...
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)); // "A-tisket a-tasket A green and yellow basket"