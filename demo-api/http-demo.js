let http = require('http');
//http라는 모듈을 가져와 http에 담아줌: http는 내장 모듈이라 따로 설치하지 않아도 됨

//const는 블록 {} 스코프 -> 중괄호를 기준으로 선언된 중괄호 밖에선 사용될 수 없음
//let도 마찬가지, 블록 스코프

//그럼 const와 let은? const는 상수, 항상 같은 값을 유지: 값을 바꿀 수 없음

// console.log(`${num1} x ${numb2} = ${num3}`); 
// -> 템플릿 문자열

function onRequest(request, response) {
    response.writeHead(200, {'content-type' : 'text/html'});
    response.write('Hello Node.js');
    response.end();
}

http.createServer(onRequest).listen(8888);
//http 만든 사람들이 이렇게 쓰라고 만들어둠
//http 모듈에 createServer 함수에서 할 일을 다 한 다음 onRequest라는 콜백 함수를 실행시켜 달라고 매개변수로 던진 것