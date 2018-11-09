/*
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/
const findLongestWordLength = str => {
  let spStr = str.split(' ');
  // use the first index of the array as a starting point
  let longest = spStr[0].length; 

  for(let i = 1;i < spStr.length;i++){

  	// compare each charcters length
  	// and assign it to "longest" if it's longer
    if(spStr[i].length > longest)
      longest = spStr[i].length;
  }
  return longest;
}

findLongestWordLength("I"); // 1
findLongestWordLength("May the force be with you"); // 5
findLongestWordLength("The quick brown fox jumped over the lazy dog"); // 6
findLongestWordLength("What is the average airspeed velocity of an unladen swallow"); // 8
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"); // 19