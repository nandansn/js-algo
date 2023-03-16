# js-algo

## Recursion

### What is recursion?
- a process that calls itself.
- JSON.parse/JSON.stringify implemented using recursion
- document.getElementById and DOM traversl algorithms
- Object traversal
- We will see it with more complex DS
- its sometimes cleaner compared to the iterative solution


### Call Stack

- call stack is DS used in JS to manage the invoked function.
- any time a function is invoked it is placed (pushed) on top of the call stack
- when JS sees the return keyword or when the function ends, the compiler will remove function from stack(pop)
- you can check the call stack in the chrome -> console -> sources

### How recursive functions work?

- invoke the same funciton with different input unti you reach your base case.
- base case: The condition when the recursion ends.
- This is the most important concept to understand.
- 2 Essential parts of a recurssive function
    - base case
    - different input

### Recursion pitfalls

- No base case, base may be wrong, this will lead to stackover flow
- Forgetting to return or returning the wrong thing, if there is no loginc to reach the base condition, like in the the fact if the num -1 is missing

### Helper Method Design Pattern.

- we can use helper methods to find the solution recursively

### Pure Recursion

- without helper methods,
- for arrays use methods like slice, the spread operator and concat, that makes copies of array you dont mutate them\
- strings are immutable you will need to use methods like slice, substr or substring to make copies of strigs
- Object.assign or spread operator can be used





    