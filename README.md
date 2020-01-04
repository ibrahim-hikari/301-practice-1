# 301-practice-1

1. **What library do we use in Node on the server side to allow us to create and run an HTTP server that obeys the HTTP protocol?**

* Express library.

2. **Explain this snippet of code from a server-side application**

    **`response.status(200).send('Hello World!');`**

* The number (200) represents the success response of the server so when it responses successfully send the content of the string, which is in this case *** Hello World! ***.

3. **Write a function that takes an array of numbers as an argument and outputs the square of each number in that array.**

``` 
function square(arr) {
  return arr.map(value => {
    let results = value * value
    return results;
  })
}
```
