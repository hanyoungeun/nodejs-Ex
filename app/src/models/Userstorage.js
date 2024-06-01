"use strict";

const { reduce } = require("async");

class Userstorage{
    static #users ={ //#표시는 public한 데이터를 private하게 숨김 처리 해준다
        id: ["han", "young", "eun"],
        psword: ["1234","1234","123456"],
        name: ["한영은","코딩","개발"],
    };

    static getUsers(...fields){ //위에서 데이터를 은닉화 시키고 메서드를 호출해 데이터 불러오는 방식을 사용
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); //=>[id, psword, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
}

module.exports = Userstorage;