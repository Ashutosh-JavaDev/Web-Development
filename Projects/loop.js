function table(size) {
  for (i = 1; i <= 10; i++) {
    console.log(size + " * " + i + " = " + size * i);
  }
}
let click = confirm("Do you want to see the output");
if (click == true) {
  let input = prompt("Enter the NUmber");
  table(input);
}
else{
    console.log("No Output Available");
}
