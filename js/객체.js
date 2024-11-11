let memberInfo = {
  name: "장원영",
  age: 23,
  addr: "서울시 강남구 역삼동",
  score: [99, 88, 77],
  getInfo: function(){
    const avg = (this.score[0] + this.score[1] + this.score[2])/3;
    return `이름 : ${this.name}, 나이 : ${this.age}, 주소 : ${this.addr}, 성적 : ${avg}`;
  },
};
console.log(memberInfo.getInfo())

// 비교 연산자 : 자바스크립트에서는 동등 연산자와 일치 연산자가 있음
console.log(1 == "1");  // true, 동등 연산자, 값이 같은지 확인
console.log(1 === "1"); // false, 일치 연산자, 값과 타입이 같은지 확인
console.log(1 !== "1");


// 형 변환 : 묵시적 형변환과 명시적 형변환
let num1 = 10 + "10";   //1010, 숫자와 문자열을 결합하면 문자열로 형변환
console.log(num1)

let num2 = 10 + Number("10"); // 명시적 형변환
console.log(num2)

let num3 = 10 + String(10); // 명시적 형변환과 묵시적 형변환이 일어남
console.log(num3)
