/**
 * Part 1:
 *    What will print and why? T
 *    What will change if we delete line 15? Why?
 * 
 * Part 2:
 *    Change to ES6 syntax (use arrow functions and change var to let).
 * 
 * Part 3:
 *    Modify the code so that it prints 1, 2, 2, in that order. Do not move
 *        console logs.
 */

const x = () => {
  let a = 2;
  console.log(a);
}

const y = () => {
  const a = 2;
  console.log(a);
  x();
}

const a = 1;
console.log(a);
y();


/**
 * Part 1: 
 * This will print 1, then 2, then undefined/no value. 
 * The first 1 prints because it gives a = 1 according to the global variable defined before it. 
 * The 2 prints because it takes from a = 2, as defined by the local variable before it.
 * The last undefined prints because its a, declared above, has no value attached to it. 
 * If line 15 is changed to give the var a a value, then that value will be printed. */