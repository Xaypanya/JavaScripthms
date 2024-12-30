function summation(n){ // n = 4
    let sum = 0 // O(1)
    for(let i =1; i <= n; i++){ 
        sum += i //O(n)
    }
    return sum //O(1)
}
//execution count: n+2 -> n -> O(n) Linear

console.log("summation:: ", summation(4))


function summation2(n){
    return (n*(n+1))/2 //O(1)
}

console.log("summation2:: ", summation2(4))
//execution count: 1 -> O(1) Constant
