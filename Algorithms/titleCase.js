/* 
	Return the provided string with the first letter of each word capitalized. 
	Make sure the rest of the word is in lower case.
*/
const titleCase = str => {
	let lowStr = str.toLowerCase().split(' ');
	
	for(let i = 0; i < lowStr.length;i++){
		let spSubString = lowStr[i].split('');
		spSubString[0] = spSubString[0].toUpperCase();
		lowStr[i] = spSubString.join('');
	}
	return lowStr.join(' ');
}

titleCase("I'm a little tea pot"); // I'm A Little Tea Pot.
titleCase("sHoRt AnD sToUt"); // Short And Stout.
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); // Here Is My Handle Here Is My Spout