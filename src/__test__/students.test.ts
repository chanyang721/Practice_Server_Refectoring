import * as request from 'supertest'
import mysql from "mysql"
import dotenv from "dotenv";
import fs from "fs"
dotenv.config();

import InstructorModel from "../Service/instructorquery"
import StudentModel from "../Service/studentquery"
import QueryFormat from "../utils/query"
import config from "../config";

describe("Jest Testing 실험실 오픈!!", () => {
    test("일단 더하기를 해봅시다. 1 + 1 = 2가 참인 테스트를 만들자!", () => {
        expect(1 + 1).toEqual(2);
    })
    
    test("1 + 1 = 2가 거짓인 테스트를 만들자!", () => {
        expect(1 + 2).not.toEqual(2);
    })
})


describe("Jest import 실험실 오픈!!", () => {
    let db;

    beforeAll( async () => {
        console.log(" ------------------------------------------ ")
        console.log(config.test)
        console.log(" ------------------------------------------ ")
        db = mysql.createConnection({
            ...config.test,
            multipleStatements: true
        });
        db.connect();
    })
    
    test("import로 가져온 함수를 실행시켜보자", async () => {
        const email = "chanyang721@gmail.com"
        const InstructorModelInstance = new InstructorModel(new QueryFormat)
        const result = await InstructorModelInstance.test1(email)
        expect(result).toEqual("chanyang721@gmail.com")
    })

    describe("데이터 베이스 실험실 오픈!!", () => {

        test("데이터 베이스에 쿼리문을 날려 응답을 받아보자!", async () => {
            const email = "testUser@gmail.com"
            const userRecord = {

            }
            const studentsModelInstance = new StudentModel(new QueryFormat);
            const result = await studentsModelInstance.createUserQuery({ email });
            expect(result).toEqual({  });
        })

    })


    afterAll(async () => {
        db.end()
    })
})







