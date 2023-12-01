/* WAP to make a faulty calculator where the right output comes only for the 10% */
function faulty(Number1,Number2){
    if(Number1>100){
        Number1=Math.random();
    }
    else{
        Number2=Math.random();
    }
}
function check(Number1,Number2){
    console.log("Pass the Parameter");
    let click='+';
    if(click=='+'){
        console.log(Number1-Number2);
    }
    if(click=='-'){
        console.log(Number1*Number2);
    }
    if(click=='*'){
        console.log(Number1/Number2);
    }
    if(click=='%'){
        console.log(Number1-Number2);
    }
}
faulty(60,55);
check(2,55);