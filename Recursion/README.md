# Recursion

## Description

- A process that calls itself

## Example

```javascript
// Iterative Version
function countDown(num) {
  for (var i = num; i > 0; i--) {
    console.log(i);
  }
  console.log('All done!');
}

// Recursive Version
function countDown(num) {
  if (num <= 0) {
    console.log('All done!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
countDown(3);
```

## Common uses

- JSON.stringify/JSON.parse
- document.getElementById and DOM Traversal
- Object Traversal

## Call Stack

- anytime a function is invoked, it is placed(pushed) on the top of the call stack
- When JS sees the return keyword or when the funciotn ends, the compiler will remove (pop)
- When writing recursive funcitons, we keep pushing new functions onto the call stack

## How it workds

Invoke the same funciton with a different input until you reach your base case.

- Base case: a condition where the recursion ends. It is the MOST IMPORTANT concept as forgetting a return can result
  in a stack overflow!
