"use strict";
const fs = require("fs").promises;

// const { reduce } = require("async");
// const { error } = require("console");

class Userstorage{
    static #getUserInfo(data, id){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); //=>[id, psword, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }

    static #getUsers(data, isAll, fields){
        const users = JSON.parse(data);
        if(isAll) return users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUsers(isAll, ...fields){ //위에서 데이터를 은닉화 시키고 메서드를 호출해 데이터 불러오는 방식을 사용
        return fs
        .readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUsers(data, isAll, fields);
        })
        .catch(console.error);
    }

    static getUserInfo(id){
        return fs
            .readFile("./src/databases/users.json")
            .then((data) => {
                return this.#getUserInfo(data, id);
            })
            .catch(console.error);
    }

    static async save(userInfo) {
        const users = await this.getUsers(true);
        if(users.id.includes(userInfo.id)){
            throw "이미 존재하는 아이디입니다.";
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return{ success: true };
        //데이터 추가
    }
}

module.exports = Userstorage;