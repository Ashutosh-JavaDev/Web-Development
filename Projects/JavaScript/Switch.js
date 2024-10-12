let text;
let Prefrence = prompt("What is  Your Favourite Drink");
switch (Prefrence) {
  case "Coca-Cola":
    text = "Coca-Cola!You have Great Choice";
    break;
  case "Sprite":
    text = "Oh! it's my Favorite too";
    break;
  default:
    text = "Choose Wisely";
    break;
}
alert(text);
