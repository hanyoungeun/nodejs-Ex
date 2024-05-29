"use strict"
const home = (req, res)=>{
    res.render("home/index");
};
const login = (req,res) => {
    res.render("home/login");
};
const write = (req,res) => {
    res.render("home/write");
};

module.exports ={
    home,
    login,
    write,
};
// { key: value} //오브젝트는 키와 value값으로 이루어짐. 위와 같이 키값만 넣어주면 자체적으로 키값을 value값으로 넣어줌
// {
//     hello:hello
//     login: login
// }