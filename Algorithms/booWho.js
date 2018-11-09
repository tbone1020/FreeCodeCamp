/*

Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.

*/
const booWho = bool => {
  return typeof bool == 'boolean'
}

booWho(null);// false
booWho(true); // true
booWho(false); // true