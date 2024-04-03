// Flatten Array -  Write a function called flattenArray that takes a nested array as input and returns a flat array with all nested elements flattened. For example, if arr = [1, [2, 3], [4, [5, 6]]], the output should be [1, 2, 3, 4, 5, 6].

function flattenArray(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val),
    []
  );
}

// Test the function
const arr = [1, [2, 3], [4, [5, 6]]];
const flattenedArray = flattenArray(arr);
console.log(flattenedArray);
