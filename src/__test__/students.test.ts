// import * as request from 'supertest'
import mysql from "mysql"
import dotenv from "dotenv";
import { expressMiddlewares, expressRoutes } from "../middlewares/express"
import fs from "fs"
import App from "../index";
dotenv.config();

const schema = fs.readFileSync('./schema.sql').toString();
const seed = fs.readFileSync('./seed.sql').toString();
const testDB = 'Inflearn_test';

describe('데이터 베이스 연결', () => {
    let db, app;
    beforeAll((done) => {
        db = mysql.createConnection({
            user: 'root',
            password: process.env.DATABASE_PASSWORD,
            multipleStatements: true
        });
        done()
    });

    describe('데이터 넣기', () => {
        beforeEach((done) => {
            db.query(
                `DROP DATABASE IF EXISTS ${testDB};
                CREATE DATABASE ${testDB};
                USE ${testDB};
                ${schema}
                ${seed}`,
                done()
            )
        });

        afterEach(() => {

        })  

    
        test("1 + 1 = 2", () => {
            expect(1 + 1).toBe(2)
        })
    })

    afterAll(function () {

    })
})