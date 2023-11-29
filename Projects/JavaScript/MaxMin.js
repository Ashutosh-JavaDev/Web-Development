// Function
function  maximun(min,max){
    if(min<max){
        console.log(max + " Is Greater and " + min + " is Smaller");
    }
    else if(min==max){
        console.log("Both Are Equal")
    }
    else{
        console.log(max + " Is smaller and " + min + " is Greater");
    }
}

let  max=prompt("Enter the first Number");
let min=prompt("Enter the Second  NUmber");
maximun(min,max);