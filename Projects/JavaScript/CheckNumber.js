// Write a function that checks if a number is even or odd and returns a string with the result.
function checkNumber(number){
    if(number%2==0){
        console.log("Number is Even");
    }
    else{
        console.log("Number is odd");
    }
}

let number=prompt("Enter the Number For  Check");
checkNumber(number);