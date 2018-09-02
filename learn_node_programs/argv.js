console.log(process.argv);

// Get input (after file)
input = process.argv.slice(2);

// Print conversion for sanity check
console.log(input);



let sumResult = ((x) => {
  let sum = 0;
  sum += Number(x);
  return sum;
});

console.log(sumResult(input));
//console.log(sumResult(input));

