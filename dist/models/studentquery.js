"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const database_1 = __importDefault(require("../database"));
let StudentModel = class StudentModel {
    constructor() { }
    createUser(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let sql = `SELECT * FROM students WHERE email = ?`;
                const duplicUser = yield this.Query(sql, [email]);
                console.log(duplicUser);
                if (!duplicUser[0]) {
                    let sql = "INSERT INTO students (nickname, email, lectures) VALUSE (?, ?, ?)";
                    const userRecord = yield this.Query(sql, [email]);
                    return { userRecord };
                }
                else {
                    throw new Error("중복된 이메일이 존재합니다.");
                }
            }
            catch (err) {
                console.log(err);
                throw new Error("유저 생성을 실패했습니다.");
            }
        });
    }
    Query(sql, params) {
        return new Promise((resolve, reject) => {
            database_1.default.query(sql, params, (err, result) => {
                if (err)
                    return reject(err);
                resolve(result);
            });
        });
    }
};
StudentModel = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [])
], StudentModel);
exports.default = StudentModel;
// export const utils = {
//     students: {
//         create: (email: string, callback: Function): void => {
//             const nickName = email.split("@")[0];
//             const sql = `INSERT INTO students (nickname, email, lectures) VALUES (?, ?, ?)`;
//             const params = [nickName, email, "{}"]
//             db.query(sql, params, (error, result) => {
//                 if (error) console.log(error);
//                 callback(error, result);
//             })
//         },
//         getList: () => {
//         }
//     },
// }
