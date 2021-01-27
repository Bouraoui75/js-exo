"use strict";

// --------------------------------------------Function without argument--------------------------------------------
export function isoNum() {
    return 42;
}

// --------------------------------------------------- Function with arguments -------------------------------------
export function myFct(arg1, arg2) {
    return arg1 + arg2 ;
}
// --------------------------------------------------- Messi’s Goal Total -------------------------------------
export function goalTotal (a, b, c) {
    return a+b+c;
  }
// --------------------------------------------------- Grasshopper Order of Operations -------------------------------------
export function GrasshopperOrder () {
    return (2 + 2) * (2 + 2) * 2;
  }
// --------------------------------------------------- Return the First Element in an Array -------------------------------------
export function getFirstValue(arr) {
	return arr[0];
}
// --------------------------------------------------- Find the Smallest and Biggest Numbers -------------------------------------

export function minMax(nombres){
    var max = 0;
    var min = 0;

    for (var i = 0; i < nombres.length; i++) {
        if (nombres[i] > max)
          max = nombres[i];
        if (nombres[i] < min)
          min = nombres[i];
      } 
      return [min , max];

    }


// --------------------------------------------------- Sort by String Length -------------------------------------
export function sortByLength(arr) {
	return arr.sort((a, b) => a.length - b.length)
}
// --------------------------------------------------- Filter Strings from Array -------------------------------------

// --------------------------------------------------- Return Last Item -------------------------------------
  const array = []; 
export function lastItem() {
  for(let i=0; i<array.length; i++ ) {
    console.log(array[array.length - 1])
  }
}
// --------------------------------------------------- The Farm Problem -------------------------------------
export function animals(chickens, cows, pigs) {
	return chickens*2+(cows+pigs)*4;
}
// --------------------------------------------------- Reverse an Array -------------------------------------
export function reverseArray(arr) {
  let result = [];
  for (let i = arr.length -1; i > -1; i--) {
    result.push(arr[i]);
  }
  
  console.log(...result);
  return result;
}

// --------------------------------------------------- Return the Next Number from the Integer Passed -------------------------------------


// --------------------------------------------------- Boolean to String Conversion -------------------------------------
export function boolToString(flag){
	var booly = "";
	if (flag){
		booly = "true";
	} else{
		booly = "false";
	}
	return booly;
}

// --------------------------------------------------- Filter out Strings from an Array -------------------------------------
export function filterArrayInt(tab){
  var res = [];

  for (var i = 0; i < tab.length; i++){
      var test = (tab[i]);
      if (typeof test === 'number'){
          res.push(tab[i]);
      }
  }
  return res;
}
// --------------------------------------------------- Array of Multiples -------------------------------------


// --------------------------------------------------- Convert Hours and Minutes into Seconds -------------------------------------

// --------------------------------------------------- Return Negative -------------------------------------
export function returnNegative(n){
  if (n < 0 || n === 0) {
		return n;
	} else {
		return n * (-1);
	}
}
// --------------------------------------------------- Simple Loop -------------------------------------


// --------------------------------------------------- Area of a Rectangle -------------------------------------

// --------------------------------------------------- Two Makes Ten -------------------------------------


// --------------------------------------------------- Add up the Numbers from a Single Number -------------------------------------

// --------------------------------------------------- Matchstick Houses -------------------------------------
