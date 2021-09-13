// Implement an algorithm to determine if a string has all unique characters

function isUnique(str){
    if (str.length ===0) return;
    return str.split('').filter((el,i) => str.indexOf(el) !== i).length === 0;
}

console.log(isUnique(''))