// Sort array elements accoring to the amount of times they appeareed in the array.

let array = ['banana', 'grapefruit', 'banana', 'grapefruit', 'banana', 'orange', 'banana','orange','orange','orange','orange'];

const hash = {};


for (let i=0; i<array.length; i++) { // complexity : n
    hash[array[i]] =hash[array[i]] === undefined? 1 : hash[array[i]] + 1;
}

console.log(hash);
console.log(Object.keys(hash).sort((a,b)=>hash[b]-hash[a])); // nlogn

// overal complexity n+n+nlogn = 2n+nlogn = n(2+logn) ± nlogn
// space complexity: 2n
// test.