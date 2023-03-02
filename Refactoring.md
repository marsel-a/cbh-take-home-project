# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

After reading the code I understand that the algorithm is designed to return hashed value when then `partitionKey` prop is provided or not. So I decided to I extract the logic that retrieves value if `partitionKey` is provided into a new function and call it from the main function.
To tidy up the codes I do the following:
- the code contains nested `if` so it can be refactored using guardian clause principle, which is to return the negative case as soon as possible.
- I use the ternary operator to simplify a single `if-else` logic.
- I move the constant variables to the top, so they can be accessed by other functions inside the file.
- I use destructure to access `partitionKey` prop, since it is used in multiple places.
- lastly, I changed the name of the parameter from `event` to `input` to be more descriptive.