let count1 = 0,
  count2 = 0,
  count3 = 0,
  count4 = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0) {
    console.log("Fizz");
    count1++;
  } else if (i % 5 == 0) {
    console.log("Buzz");
    count2++;
  } else if (i % 7 == 0 && i % 5 == 0) {
    console.log("Muzz");
    count3++;
  } else {
    console.log(i);
    count4++;
  }
}
console.log("Count 1 :", count1);
console.log("Count 2 :", count2);
console.log("Count 3 :", count3);
console.log("Count 4 :", count4);
