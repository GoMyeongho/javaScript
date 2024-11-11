// 시간과 분을 입력하면 45분 일찍 시간이 설정되도록 변경하는 프로그램
// 시간은 24시간제로 하고, 0시 30분 --> 23시 45분
// parseInt(): 문자열을 정수로 반환해주는 함수

let hour = parseInt(prompt("시간을 입력하시오 : "));
let min = parseInt(prompt("분을 입력하시오 : "));

min -= 45;
if (min < 0){
    hour--;
    min += 60;
    if(hour < 0){
        hour += 24;
    }
}

document.write(hour+":"+min);
