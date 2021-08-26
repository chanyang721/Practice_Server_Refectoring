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
describe("Jest Testing 실험실 오픈!!", () => {
    test("일단 더하기를 해봅시다. 1 + 1 = 2가 참인 테스트를 만들자!", () => {
        expect(1 + 1).toEqual(2);
    });
    test("1 + 1 = 2가 거짓인 테스트를 만들자!", () => {
        expect(1 + 2).not.toEqual(2);
    });
});
describe("Jest import 실험실 오픈!!", () => {
    let db;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        console.log(" ------------------------------------------ ");
        console.log(config_1.default.test);
        console.log(" ------------------------------------------ ");
        db = mysql_1.default.createConnection(Object.assign(Object.assign({}, config_1.default.test), { multipleStatements: true }));
        db.connect();
    }));
    test("import로 가져온 함수를 실행시켜보자", () => __awaiter(void 0, void 0, void 0, function* () {
        const email = "chanyang721@gmail.com";
        const InstructorModelInstance = new instructorquery_1.default(new query_1.default);
        const result = yield InstructorModelInstance.test1(email);
        expect(result).toEqual("chanyang721@gmail.com");
    }));
    describe("데이터 베이스 실험실 오픈!!", () => {
        test("데이터 베이스에 쿼리문을 날려 응답을 받아보자!", () => __awaiter(void 0, void 0, void 0, function* () {
            const email = "testUser@gmail.com";
            const userRecord = {};
            const studentsModelInstance = new studentquery_1.default(new query_1.default);
            const result = yield studentsModelInstance.createUserQuery({ email });
            expect(result).toEqual({});
        }));
    });
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        db.end();
    }));
});
