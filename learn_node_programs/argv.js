// Get input (after file)
input = process.argv.slice(2);
// console.log(process.argv);


let convertStringToNum = ((arr)=> {
    let intArr = [];
    for (let i in arr){
        intArr.push(Number(arr[i]));
    }
    // Print conversion for sanity check
    // console.log(intArr);
    return intArr;
});

// Reassign input
input = convertStringToNum(input);

// Func to add all elements
let sumOfAllElements = ((intArr) => {
    let sum = 0;
    for(let i in intArr)
        sum += intArr[i];
    return sum;
});

// console.log("Hello from remote laptop");
console.log(sumOfAllElements(input));

