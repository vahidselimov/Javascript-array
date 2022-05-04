function firstDigit(number) {
   while (number>=10) {
       number/=10;
       return Math.floor(number)
   } 

}
function lastdigit(number) {
    return Math.floor(number % 10)
}
let number=4573;
// console.log(firstDigit(number)+lastdigit(number))