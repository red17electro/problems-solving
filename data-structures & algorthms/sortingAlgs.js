let a = [5,1,23,4,55,4,5,6,7];

function bubbleSort(array){
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }

    return array;
}

function quickSort(array) {
    if (array.length < 2) { 
        return array; // O(1)
    }

    const pivot = array[parseInt(array.length / 2)]; //array[array.length - 1]; // choosing the last one; O(1)
    const left = [];
    const right = [];	

    for (let i = 0; i < array.length - 1; i++){ // O(n)
        if (array[i] >= pivot) {
            right.push(array[i]);
        } else {
            left.push(array[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

function merge(left, right) {
    const arr = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }

    return [...arr, ...left, ...right];
}

function mergeSort(array) {
    if (array.length < 2) {
        return array;
    }

    const half = array.length / 2;

    const left = array.splice(0, half);
    
    return merge(mergeSort(left), mergeSort(array));
}


console.log(quickSort(a));