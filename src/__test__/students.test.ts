import * as request from 'supertest'
import mysql from "mysql"
import dotenv from "dotenv";
import { expressMiddlewares, expressRoutes } from "../middlewares/express"
import fs from "fs"
import App from "../index";
dotenv.config();

import InstructorModel from "../models/instructorquery"
import StudentModel from "../models/studentquery"
import QueryFormat from "../utils/query"
import config from "../config";

describe("Jest 실험실 오픈!!", () => {
    let db;
    
    test("일단 더하기를 해봅시다. 1 + 1 = 2가 참인 테스트를 만들자!", () => {
        expect(1 + 1).toEqual(2);
    })
    
    test("1 + 1 = 2가 거짓인 테스트를 만들자!", () => {
        expect(1 + 2).not.toEqual(2);
    })
    
    test("import로 가져온 함수를 실행시켜보자", async () => {
        const email = "chanyang721@gmail.com"
        const testModel = new InstructorModel(new QueryFormat)
        const result = await testModel.test1(email)
        expect(result).toEqual("chanyang721@gmail.com")
    })
    
    beforeAll(() => {
        db = mysql.createConnection({
            ...config.test,
            multipleStatements: true
        });

    })
    

    test("데이터 베이스를 연결시켜 쿼리문을 날려 응답을 받아보자!", async () => {
        const email = "testUser@gmail.com"
        const studentsModel = new StudentModel(new QueryFormat);
        const result = await studentsModel.createUserQuery({ email });
        expect(result).toEqual({});

    })
    


    afterAll(() => {
        db.end()

    })
})










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