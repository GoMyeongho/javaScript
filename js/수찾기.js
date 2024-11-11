// 3개의 수를 입력 받아서 가장 큰 수와 작은수를 화면에 출력
// prompt 로 입력받은 값은 문자열이므로 숫자로 변경하기 위해서는
// Number() 함수로 형을 변경해야 함

let n1
let n2
let n3


n1 = Number(prompt("첫번째 숫자 입력", ""));
n2 = Number(prompt("두번째 숫자 입력", ""));
n3 = Number(prompt("세번째 숫자 입력", ""));

document.write("최대값 : " + Math.max(n1,n2,n3) + " 최솟값 : " + Math.min(n1,n2,n3));

