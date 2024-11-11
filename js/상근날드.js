let burger;
let drink;


do {burger =  (prompt("햄버거 세개의 가격을 입력 하시오 : ", "").split(" "));
  if (burger.length !== 3) alert("입력값이 조건에 맞지 않습니다.")}
while(burger.length !== 3);

do {drink =  (prompt("음료 2개의 가격을 입력하시오 : ","").split(" "));
  if (drink.length !== 2) alert("입력값이 조건에 맞지 않습니다.")}
while(drink.length !== 2);

let price = Math.min(burger[0],burger[1],burger[2]) + Math.min(drink[0],drink[1]) - 50;

document.write("<div class='container'>세트 가격 : " + price + "</div>")


