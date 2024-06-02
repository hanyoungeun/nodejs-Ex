"use strict"
const User = require("../../models/User");
const Userstorage = require("../../models/Userstorage");


const output = {
    home: (req, res)=>{
        res.render("home/index");
    },
    login: (req,res) => {
        res.render("home/login");
    },
    register: (req, res)=>{
        res.render("home/register");
    }
};

const process ={
    login: (req,res)=>{
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
        // const id = req.body.id,
        //  psword = req.body.psword;

        // const users = Userstorage.getUsers("id","psword");

        // const response = {};
        // if(users.id.includes(id)){
        //     const idx = users.id.indexOf(id);
        //     if(users.psword[idx] == psword){
        //         response.success = true;
        //         return res.json(response);
        //     }
        // }

        // response.success = false;
        // response.msg = "로그인에 실패하셨습니다"
        // return res.json(response);
    },
    register: (req,res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    }
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