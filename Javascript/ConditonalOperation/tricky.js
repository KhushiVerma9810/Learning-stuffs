let x = false;

switch (x) {
  case true:
    console.log("x is 1");
    break;
  case x < 0:
    console.log("x is 2");
    break;
  case 3:
    console.log("x is 3");
    break;
  case 4:
    console.log("x is 4");
    break;
  case 5:
    console.log("x is 5");
    break;
  default:
    console.log("x is not 1, 2, 3, 4 or 5");
}
