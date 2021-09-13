function arePermutations(str1, str2){
    if (str1.length !== str2.length){
        return false;
    }

    str1 = str1.split('').sort((a,b)=>('' + a).localeCompare(b)).join('');
    str2 = str2.split('').sort((a,b)=>('' + a).localeCompare(b)).join('');

    console.log(str1, str2);

    return str1 === str2;   
}

function arePermutations2(str1, str2){
    if (str1.length !== str2.length) return false;


    const hashStr1 = {};
    const hashStr2 = {};

    for (let i=0;i<str1.length;i++){
        hashStr1[str1[i]] = (hashStr1[str1[i]] || 0) + 1;
    }

    for (let i=0;i<str2.length;i++){
        hashStr2[str2[i]] = (hashStr2[str2[i]] || 0) + 1;
    }

    for (let elem in hashStr1){
        if (hashStr1[elem] !== hashStr2[elem]){
            return false;
        }
    }

    return true;
}

console.log(arePermutations2('hello','oellh'));