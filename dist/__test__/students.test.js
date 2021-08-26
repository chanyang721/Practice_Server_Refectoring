"use strict";
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
const mysql_1 = __importDefault(require("mysql"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const instructorquery_1 = __importDefault(require("../models/instructorquery"));
const studentquery_1 = __importDefault(require("../models/studentquery"));
const query_1 = __importDefault(require("../utils/query"));
const config_1 = __importDefault(require("../config"));
describe("Jest 실험실 오픈!!", () => {
    let db;
    test("일단 더하기를 해봅시다. 1 + 1 = 2가 참인 테스트를 만들자!", () => {
        expect(1 + 1).toEqual(2);
    });
    test("1 + 1 = 2가 거짓인 테스트를 만들자!", () => {
        expect(1 + 2).not.toEqual(2);
    });
    test("import로 가져온 함수를 실행시켜보자", () => __awaiter(void 0, void 0, void 0, function* () {
        const email = "chanyang721@gmail.com";
        const testModel = new instructorquery_1.default(new query_1.default);
        const result = yield testModel.test1(email);
        expect(result).toEqual("chanyang721@gmail.com");
    }));
    beforeAll(() => {
        db = mysql_1.default.createConnection(Object.assign(Object.assign({}, config_1.default.test), { multipleStatements: true }));
    });
    test("데이터 베이스를 연결시켜 쿼리문을 날려 응답을 받아보자!", () => __awaiter(void 0, void 0, void 0, function* () {
        const email = "testUser@gmail.com";
        const studentsModel = new studentquery_1.default(new query_1.default);
        const result = yield studentsModel.createUserQuery({ email });
        expect(result).toEqual({});
    }));
    afterAll(() => {
        db.end();
    });
});
// const schema = fs.readFileSync('./schema.sql').toString();
// const seed = fs.readFileSync('./seed.sql').toString();
// const testDB = 'Inflearn_test';
// describe('데이터 베이스 연결', () => {
//     let db, app;
//     beforeAll((done) => {
//         db = mysql.createConnection({
//             user: 'root',
//             password: process.env.DATABASE_PASSWORD,
//             multipleStatements: true
//         });
//         done()
//     });
//     describe('데이터 넣기', () => {
//         beforeEach((done) => {
//             db.query(
//                 `DROP DATABASE IF EXISTS ${testDB};
//                 CREATE DATABASE IF NOT EXISTS ${testDB};
//                 USE ${testDB};
//                 ${schema}
//                 ${seed}`,
//                 done()
//             )
//         });
//         afterEach(() => {
//         })  
//         test("1 + 1 = 2", () => {
//             expect(1 + 1).toBe(2)
//         })
//     })
//     afterAll(function () {
//     })
// })
