function FizzBuzz(numIn) {
    let output =""
    if (numIn % 3 == 0){
        output += "Fizz"
    }
    if (numIn % 5 == 0){
        output += "Buzz"
    }
    if (output == ""){
        output = numIn
    }
    console.log(numIn,output)
}
let input = 15
for (let i = 1; i <= input; i++){
    FizzBuzz(i)
}