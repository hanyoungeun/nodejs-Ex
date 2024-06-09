"use strict";

const Userstorage = require("./Userstorage");

class User{
    constructor(body){
        this.body = body;
    }

    async login(){
        const client = this.body;
        const {id, psword } = await Userstorage.getUserInfo(client.id);
       
        if(id){
            if(id === client.id && psword === client.psword){
                return {success: true};
            }
            return{ success: false, msg:"비빌번호가 잘못 입력되었습니다."}
        }
        return({ success: false, msg: "존재하지 않는 아이디입니다."})
    }

    async register(){
        const client = this.body;
        try{
        const response = await Userstorage.save(client);
        return response;
        } catch(err){
            
            return { success: false, msg: err };
        }
    }
}

module.exports = User;