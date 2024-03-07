// Code your solution in this file!
const driverss = ["Antonia", "Nuru", "Amari", "Mo"];
function returnFirstTwoDrivers(arr) {
  return [arr[0], arr[1]];
}
//   1) should return a new array containing the first two drivers from the passed-in array
function returnLastTwoDrivers(arr) {
  return [arr[arr.length - 2], arr[arr.length - 1]];
}
//   2) should return an array of the last two drivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//   3) has the `returnFirstTwoDrivers` function to as its first element
//   4) has the `returnLastTwoDrivers` function to as its last element
//   5) allows us to invoke either function from the array
function createFareMultiplier(a) {
    return (b)=>{return a*b}
}
//   6) returns a function
//   7) should multiply a given value using the created multiplier
function fareDoubler(fares) {
    return fares*2
}
//   8) is a function
//   9) doubles fares
function fareTripler(fares) {
    return fares*3

}
//   10) is a function
//   11) triples fares
function selectDifferentDrivers(arrayOfDrivers, fun) {
    return fun(arrayOfDrivers)
}
//   12) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
//   13) returns the last two drivers when passed returnLastTwoDrivers() as the second argument
console.log(returnFirstTwoDrivers);
