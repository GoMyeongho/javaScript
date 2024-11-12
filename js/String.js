// 문자열을 다루는 String 객체

const pwd = '12345678'

// 문자열의 길이 확인 : length
console.log(pwd.length)

//특정 문자열의 포함 여부 확인
// include("문자열") : 포함 여부를 true/false 로 반환
// indexOf("문자열") : 시작 인덱스를 반환하고 없으면 -1 반환

const email = "test!naver.com"
if(!email.includes("@")){
  console.log("올바른 이메일 형식이 아닙니다.")
}

console.log(" ")

const email2 = "test!naver.com"
if(email2.indexOf("@") === -1){
  console.log("올바른 이메일 형식이 아닙니다.")
}


// lastIndexOf() : 찾고자 하는 문자열이 둘이상 발견되면 제일 마지막에 발견된 문자열의 인덱스 반환
const email3 = "test@naver@naver.com"
console.log(email3.lastIndexOf("naver"))

// slice() : 시작위치와 종료위치(미만)를 주면 해당 문자열을 잘라내서 반환
const fruits = "Apple, BANANA, ORANGE";
const sliceVal = fruits.slice(-6);
console.log(sliceVal)

// substring() : 시작위치와 종료위치(미만)를 주면 해당 문자열을 잘라내서 반환
const fruits2 = "Apple, BANANA, ORANGE";
const sliceVal2 = fruits2.substring(fruits.indexOf("BANANA"),fruits.indexOf("BANANA") + 6);
console.log(sliceVal2)

// replace() : 문자열 내의 문자열을 지정한 문자열로 바꾸는 함수
const names = "안유진, 이영지, 미미, 이은지, 나영석"
const newNames = names.replace("나영석", "장원영")
console.log(newNames)

const engStr = "A stitch in time saves nine"
console.log(engStr.toUpperCase())
console.log(engStr.toLowerCase())

// 두개의 문자열 합치기
const str1 = "A";
// str1 += " stitch";
// str1 += " in time saves nine";
// console.log(str1) // 불변성의 법칙을 어김

const str2 = str1.concat(" stitch");
const str3 = str2.concat(" in time saves nine");
console.log(str3)

// trim() 문자열의 앞, 뒤 공백을 제거합니다.
const str = " Hello World! ";
console.log(str.trim()); // Hello World!

// padStart(), padEnd() : 문자열 앞과 뒤에 지정된 문자를 길이만큼 추가하는 함수
const fixStr = "1234";
const newStr = fixStr.padStart(10,0);
console.log(newStr)

// charAt() : 문자열에서 특정 인덱스에 해당하는 문자 하나를 반환하는 함수
const addr = "서울시 강남구 역삼동";
console.log(addr.charAt(2));

// charCodeAt()
console.log(addr.charCodeAt(2))

const birthday = "1997-06-12";
const birthArr = birthday.split("-");
console.log(birthArr)
