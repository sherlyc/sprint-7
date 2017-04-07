// MINIMUM
function min (a, b) {
  if(a>b) {
    return b}
  else {
    return a}
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

//RECURSION

function isEven(number){
  if(number===0) {
    return true;
  }
  if(number===1) {
  	 return false;
  } else if (number <0){
     return isEven (-number);
  }
  else{
    return isEven(number-2);
  }

}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
//BEAN COUNTING
function countBs(str){
  var numChar=0;
  for(var i = 0; i < str.length; i++){
      if (str.charAt(i)==="B"){
        numChar+=1;
      }
  }
    return numChar;

}
console.log(countBs("BBC"));
// → 2

function countChar(str, char){
  var numChar=0;
  for(var i = 0; i < str.length; i++){
      if (str.charAt(i)===char){
        numChar+=1;
      }
  }
    return numChar;

}


console.log(countChar("kakkerlak", "k"));
// → 4
