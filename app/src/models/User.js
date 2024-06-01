"use strict";

const Userstorage = require("./Userstorage");

class User{
    constructor(body){
        this.body = body;
    }

    login(){
        const body = this.body;
        const { id, psword } = Userstorage.getUserInfo(body.id);
       
        if(id){
            if(id === body.id && psword === body.psword){
                return {success: true};
            }
            return{ success: false, msg:"비빌번호가 잘못 입력되었습니다."}
        }
        return({ success: false, msg: "존재하지 않는 아이디입니다."})
    }
}

module.exports = User;