"use strict"

const users ={
    id: ["han", "young", "eun"],
    psword: ["1234","1234","123456"],
};

const output = {
    home: (req, res)=>{
        res.render("home/index");
    },
    login: (req,res) => {
        res.render("home/login");
    },
};

const process ={
    login: (req,res)=>{
        const id = req.body.id,
        psword = req.body.psword;

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx] == psword){
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다",
        });
    },
};

const write = (req,res) => {
    res.render("home/write");
};

module.exports ={
    output,
    write,
    process,
};
// { key: value} //오브젝트는 키와 value값으로 이루어짐. 위와 같이 키값만 넣어주면 자체적으로 키값을 value값으로 넣어줌
// {
//     hello:hello
//     login: login
// }