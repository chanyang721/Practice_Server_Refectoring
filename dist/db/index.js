"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const dotenv_1 = __importDefault(require("dotenv"));
const config_1 = __importDefault(require("../config"));
dotenv_1.default.config();
const con = mysql_1.default.createConnection(config_1.default["development"]);
exports.default = con;
// [process.env.NODE_ENV || "development"]
