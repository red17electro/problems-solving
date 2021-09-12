// Sort array elements accoring to the amount of times they appeareed in the array.

let array = ['banana', 'grapefruit', 'banana', 'grapefruit', 'banana', 'orange', 'banana','orange','orange','orange','orange'];

const hash = {};


for (let i=0; i<array.length; i++) { // complexity : n
    hash[array[i]] =hash[array[i]] === undefined? 1 : hash[array[i]] + 1;
}

console.log(hash);

let sortedPairs = [];

for (let i in hash){ // complexity: < n
    sortedPairs.push({
        key: i,
        value: hash[i]
    })
}

console.log(sortedPairs);

sortedPairs = sortedPairs.sort((a,b)=> b.value - a.value); // complexity: nlogn

console.log(sortedPairs.map(el=>el.key)); // complexity n

// overal complexity n+n+nlogn+n = 3n+nlogn = n(3+logn) ± nlogn
// space complexity: 2n