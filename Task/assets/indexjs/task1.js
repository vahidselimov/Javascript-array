
function rev(word) {
    let reveresed=""
    for(var i=word.length-1;i>=0;i--)
    reveresed+=word[i]
    return reveresed
}
console.log(rev("Vahid"))