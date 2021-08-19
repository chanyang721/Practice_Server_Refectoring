"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class LectureModel {
    Query(sql, params) {
        return new Promise((resolve, reject) => {
            database_1.default.query(sql, params, (err, result) => {
                if (err)
                    return reject(err);
                resolve(result);
            });
        });
    }
}
exports.default = LectureModel;
