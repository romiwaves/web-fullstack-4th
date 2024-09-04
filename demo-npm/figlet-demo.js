var figlet = require("figlet"); //figlet이라는 변수(var)에 figlet이라는 모듈을 가져올게(require)!

figlet("romiwaves", function (err, data) { //figlet("어떤 글자를 아스키 코드로 표현할거니?", 콜백함수로 익명의 함수를 던짐)
    //익명의 함수를 쓰는 이유 = 이 함수를 쓸 일이 다른 데는 없어서...
    // 그냥 Figlet 만든 사람이 매개변수로 함수를 받기로 했기 때문 = 제작자가 원해서~

    //첫번째 매개변수 "romiwaves"라는 문자열을 받아서,
    //아스키 아트를 만든 다음에
    //두번째 매개변수 function 함수를 실행  (=콜백)
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  } //에러가 나면 콘솔에 문구 찍어주고
  console.log(data);
  //에러가 안 나면 data를 콘솔에 찍어주기
});