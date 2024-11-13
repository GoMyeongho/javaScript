// 배열에서 사용할 수 있는 속성과 메서드 활용하기
// 배열의 메서드는 크게 파괴적 메서드와 비파괴적 메서드가 있음
// 비파괴적 메서드는 불변성의 원칙과 관련이 깊음

const arr =[10, 20, 30, 40, 50];

// // 배열을 순회하는 비파괴적 메서드를 사용
// arr.forEach(e => {
//   console.log(e)
// })

// // 내용을 바꾸거나 지정된 범위로 순회 가능
// for (let i = 0; i < arr.length; i++){
//   console.log(arr[i]);
// }

// // 이터러블 객체의 요소를 순회할 떄 사용
// for (let e of arr){
//   console.log(e)
// }

// // toString() : 배열 안의 모든 문자열을 쉼표를 이용해 모두 결합해 하나의 문자열로 반환
// console.log(arr.toString())

// // join() : 배열 안의 모든 문자열을 지정된 문자를 이용해 모두 결합해 하나의 문자열로 반환
// console.log(arr.join(" * "))

let fruits = ["Banana", "Orange", "Apple", "Mango"];

// // 파괴적 메서드
// // pop : 배열의 마지막 데이터를 제거하고, 마지막 데이터를 반환합니다.
// console.log(fruits.pop())
// console.log(fruits)
//
// // push : 배열에 새로운 데이터를 추가하고, 배열의 길이를 반환
// fruits.push("Kiwi")
// console.log(fruits)
//
// // shift : 배열의 첫번째 요소를 제거하고, 첫번째 요소를 반환합니다.
// console.log(fruits.shift())
// console.log(fruits)
//
// // unshift : 배열의 맨 앞에 요소를 추가하고, 배열의 길이를 반환.
// fruits.unshift("Lemon"); // "Lemon"을 fruits 배열 맨 앞에 추가하고 배열의 길이를 반환
// console.log(fruits)
//
// // 배열 요소 변경 : 배열의 인덱스로 접근해 새로운 요소 할당
// fruits[0] = "Kiwi";
// console.log(fruits)

// // concat() : 2개 이상의 배열을 하나의 배열로 결합 (비파괴적인 메서드)
// const arrCar1 = ["코나", "아반떼", "소나타"]
// const arrCar2 = ["산타페", "그란데", "캐스퍼"]
// const newCar = arrCar1.concat(arrCar2, "GV70");
// console.log(newCar)
//
// const newCar2 = [...arrCar1, ...arrCar2, "GV80"]
// console.log(newCar2)

// // slice() :
// const newCar3 = newCar2.slice(3);
// console.log(newCar3)

// // sort
// console.log(newCar3.sort())

// // filter() : 배열에서 특정 조건을 만족하는 배열의 요소만 찾아서 새로운 배열로 반환
// const persons = [
//   {
//     name: "유재석",
//     point: 78,
//     city: "서울"
//   },
//   {
//     name: "김종국",
//     point: 92,
//     city: "서울",
//   },
//   {
//     name: "양세찬",
//     point: 76,
//     city: "제주",
//   },
//   {
//     name: "하하",
//     point: 81,
//     city: "인천",
//   },
// ];
//
// const pass = persons.filter(e => e.point > 80);
// console.log(pass)

// // map() : 배열의 각 요소을 변환하고, 그 결과로 새로운 배열을 반환하는 매서드
// const numbers = [1, 2, 3, 4, 5];
// const squareN = numbers.map(e => e * e);  // 제곱한 결과를 반환
// console.log(squareN)
