//우리가 express를 이용해서 서버를 띄워야 하는 이유
//http를 이용하면 처리해야 할 것들이 많고 코드가 복잡해짐-> express를 쓰면 간결하고 편리함

const http = require("http");
const app = http.createServer((req, res)=>{
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8"});//한글처리
    if (req.url ==='/'){
        res.end("여기는 루트입니다");
    } else if(req.url === "/login"){
        res.end("여기는 로그인 화면입니다");
    }
})

app.listen(3001, ()=>{
    console.log("http로 가동된 서버입니다");
})