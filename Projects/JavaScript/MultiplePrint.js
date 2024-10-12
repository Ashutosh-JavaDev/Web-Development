let  count1=0,count2=0,count3=0;
for(let i=1;i<=100;i++){
 if(i%3==0){
    console.log("Fizz");
    count1++;
 }   
 else if(i%5==0){
    console.log("Buzz");
    count2++;
 }
 else if(i%3==0 && i%5==0){
    console.log("Muzz");
    count3++;
 }
}