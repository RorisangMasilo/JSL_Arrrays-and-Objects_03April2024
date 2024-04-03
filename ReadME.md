# JSL Arrays and Objects

## Questions

### Theory Question:

**Hoisting**
Discuss the concept of hoisting in JavaScript and how it affects variable and function declarations.

### Coding Exercise (Arrays):

**flattenArray**

Write a function called flattenArray that takes a nested array as input and returns a flat array with all nested elements flattened. For example, if arr = [1, [2, 3], [4, [5, 6]]], the output should be [1, 2, 3, 4, 5, 6].

### Coding Exercise (Objects):

**swapProperties**

Create a function called swapProperties that takes an object as input and returns a new object where the keys and values are swapped. For example, if the input is {a: 1, b: 2}, the output should be {1: 'a', 2: 'b'}.

## Answers

**Hoisting**

Hoisting in JavaScript affects variable and function declarations by moving them to the top of their containing scope during the compilation phase. This allows you to use variables and functions before they are declared in the code. However, it's essential to understand that only the declarations are hoisted, not the initializations or assignments.

1. Variables: Variable declarations are hoisted to the top of their scope, but not their assignments. This means you can access a variable before it's declared, but it will return undefined until it's assigned a value.
2. Functions: Function declarations are fully hoisted, allowing you to call function before it's defined in the code.

**flattenArray**

1. Function Definition: The flattenArray function takes an array arr as input.
2. Array Reduction: It uses the reduce method to iterate over each element in the array arr.
3. Recursive Flattening: For each element val, it checks if it's an array using Array.isArray(val). If it is, it recursively calls flattenArray on that element and concatenates the result to the accumulator acc. This recursion continues until all nested arrays are flattened.
4. Concatenation: If val is not an array, it simply concatenates it to the accumulator acc.
5. Base Case: The recursion stops when there are no more nested arrays, and the flattened array is returned.
6. Test the Function: An example array arr is provided, containing nested arrays. The function is called with this array, and the flattened result is logged to the console.

This function effectively flattens any nested array structure, producing the desired flat array output.

**swapProperties**

This swapProperties function iterates through each key-value pair of the input object obj and creates a new object swappedObj where the keys and values are swapped. Here's how it works:

1. It initializes an empty object swappedObj.
2. It iterates over each key in the input object using a for...in loop.
3. For each key, it accesses the corresponding value using obj[key] and assigns it as a key in the swappedObj.
4. The original key becomes the value associated with the new key in swappedObj.
5. After iterating through all key-value pairs, it returns the swappedObj.

The function effectively swaps the keys and values of the input object and returns the resulting object.

**Coding Exercises**

Refer to array.js and object.js files.
