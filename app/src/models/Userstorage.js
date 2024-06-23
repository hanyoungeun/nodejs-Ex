"use strict";
const db = require("../config/db");

// const { reduce } = require("async");
// const { error } = require("console");

class Userstorage{

    static getUserInfo(id){
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query(query, [id], (err, data)=>{
                if(err) reject(`${err}`);
                resolve(data[0]);
            });
        });
    }

    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id, name, psword) VALUES(?, ?, ?);";
            db.query(query, [userInfo.id, userInfo.name, userInfo.psword], (err, data)=>{
                if(err) reject(`${err}`);
                resolve({ success: true });
            });
        });
    }
}

module.exports = Userstorage;