# Big O Notation

## Desciption

- a way of generalizing code; comparing its performance to other code
- It's important to have a percise vocab to talk about how our code performs! (Also comes up in interviews)
- Official definition: a way of describing the relationship between the input to a function
  or as it grows and how that changes the runtime of an algorithm.
- O(f(n)) is the algorithm if the number of simple operations the computer has to do is eventually less than a constant
  times f(n)
- f(n) can be linear, quadratic, constant, or something entirely different

## Simplifying Big O Expressions

- Constants don't matter

  - O(2(n)) => O(n)
  - O(500) => O(1)
  - O(13n^2) => O(n^2)

- Smaller terms don't matter either
  - O(n + 10) => O(n)
  - O(100n + 50) => O(n)
  - O(n^2 + 5n + 8) => O(n^2)

## Short hand

1. Arithmic operations are constant
2. Variable assignment is constant
3. Accessing elements in an array (by index) or object (by key) is constant
4. In loops, the complexity is the lnegth of the loop times the complexity of whatever happens inside the loop

Ultimatley, we care about the trend instead of percision!
