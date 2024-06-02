"use strict";

const Userstorage = require("./Userstorage");

class User{
    constructor(body){
        this.body = body;
    }

    login(){
        const client = this.body;
        const { id, psword } = Userstorage.getUserInfo(client.id);
       
        if(id){
            if(id === client.id && psword === client.psword){
                return {success: true};
            }
            return{ success: false, msg:"비빌번호가 잘못 입력되었습니다."}
        }
        return({ success: false, msg: "존재하지 않는 아이디입니다."})
    }

    register(){
        const client = this.body;
        const response = Userstorage.save(client);
        return response;
    }
}

module.exports = User;