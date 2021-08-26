"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import * as request from 'supertest'
const mysql_1 = __importDefault(require("mysql"));
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
dotenv_1.default.config();
const schema = fs_1.default.readFileSync('./schema.sql').toString();
const seed = fs_1.default.readFileSync('./seed.sql').toString();
const testDB = 'Inflearn_test';
describe('데이터 베이스 연결', () => {
    let db, app;
    beforeAll((done) => {
        db = mysql_1.default.createConnection({
            user: 'root',
            password: process.env.DATABASE_PASSWORD,
            multipleStatements: true
        });
        done();
    });
    describe('데이터 넣기', () => {
        beforeEach((done) => {
            db.query(`DROP DATABASE IF EXISTS ${testDB};
                CREATE DATABASE ${testDB};
                USE ${testDB};
                ${schema}
                ${seed}`, done());
        });
        afterEach(() => {
        });
        test("1 + 1 = 2", () => {
            expect(1 + 1).toBe(2);
        });
    });
    afterAll(function () {
    });
});
