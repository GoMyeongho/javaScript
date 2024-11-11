// 자바 스크립트의 조건문은 if, if ~ else, if ~ else if ~ else, switch ~ case
// 반복문은 while, do ~ while, for(초기값;최종조건;증감값)
// for ~ in (객체 반복), for ~ of (이터러블 객체를 순회할 때 사용)
// 주민 등록 번호를 입력 받아 성별, 나이 출력하기
// (웹 출력하기) - 가능하면 css 스타일링하기
// 문자열을 자르는 함수 jumin.substring(0,2) // 문자열에서 0번째에서 2번 인덱스 미만까지 잘라냄
// 문자열에서 해당 인덱스의 문자를 추출 jumin.charAt(5); 문자열에서 5번 인덱스의 문자 추출
// const date = new Date();
// date.getFullYear() // 2024
let jumin;

do {
  jumin = prompt("주민등록 번호를 입력하시오(000000-0000000) : ", "");
  if (jumin.length !== 14 || jumin.indexOf("-") !== 6) {
    alert("입력이 잘못되었습니다. 다시 입력하세요.");
  }
} while (jumin.length !== 14 || jumin.indexOf("-") !== 6);

const date = new Date
const currentYear = date.getFullYear();

let cent;
cent = (Math.ceil((Number(jumin.charAt(7))/ 2)) * 100 + 1800);
let birth;
birth = Number(jumin.substring(0,2));

let age = currentYear - cent - birth;

let gender;
gender = (Number(jumin.charAt(7)) % 2 === 1) ? "male" : "female";

document.write("<div class='container'>gender : " + gender + " age : " + age +"</div>");
