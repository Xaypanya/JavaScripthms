function fibonacci(n){
    const fib = [0, 1] // O(1)
    for(let i = 2; i < n; i++){
        fib[i] = fib[i-1]+fib[i-2] //O(n)
    }

    return fib // O(1)
}

//execution: n+2 -> n -> O(n) Linear

console.log("expected: [ 0, 1, 1, 2, 3, 5, 8 ]")
console.log("result:: ",fibonacci(6))