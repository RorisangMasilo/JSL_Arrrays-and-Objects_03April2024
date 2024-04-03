// Swap Properties - Create a function called swapProperties that takes an object as input and returns a new object where the keys and values are swapped. For example, if the input is {a: 1, b: 2}, the output should be {1: 'a', 2: 'b'}.

function swapProperties(obj) {
  const swappedObj = {};
  for (const key in obj) {
    swappedObj[obj[key]] = key;
  }
  return swappedObj;
}

// Test the function
const inputObj = { a: 1, b: 2 };
const swappedObj = swapProperties(inputObj);
console.log(swappedObj);
