// function multiplyArrayByTwo(1,2,3,4,5,5,6,7,8);

function multiplyArrayByTwo(...args){
    return args.map(el => el * 2);
}

//console.log(multiplyArrayByTwo(1,2,3,4,5,6));

// sum(3)(4)

function sum(number){
    return (param)=>number + param;
}

//console.log(sum(sum(50)(20))(10));

// sumUnlimited(1)(2)(3)(4)()

function sumUnlimited(number){
    let counter = number;
    return function by(param){
        if (param){
            counter = counter + param;
            return by;
        } else {
            return counter;
        }
        return by;
    }}

console.log(sumUnlimited(5)(6)(100)());

// var sum = (a,b) => a + b;
// var mul = (a,b) => a * b;

// function calculate(func) {
//     return function(number){
//         return function (param){
//             return func(number, param);
//         }
//     }
// }

// console.log(calculate(sum)(2)(3));
// console.log(calculate(mul)(2)(3));