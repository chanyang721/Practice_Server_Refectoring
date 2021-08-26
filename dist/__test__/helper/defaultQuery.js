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
const dotenv_1 = __importDefault(require("dotenv"));
const mysql_1 = __importDefault(require("mysql"));
dotenv_1.default.config();
class SingletonBase {
    constructor() {
        if (!!SingletonBase) {
            console.log("    already has instance.");
            console.log("    return existing instance.");
            return SingletonBase;
        }
    }
}
class DatabaseConnector extends SingletonBase {
    constructor() {
        super();
        this.config = {
            host: 'localhost',
            user: 'root',
            password: process.env.DATABASE_PASSWORD || '1q2w',
            database: 'Inflearn_test',
        };
        return this;
    }
    init() {
        this.connection = mysql_1.default.createConnection(Object.assign(Object.assign({}, this.config), { multipleStatements: true }));
        return new Promise((resolve, reject) => {
            this.connection.connect((err) => {
                if (err) {
                    reject(err.message);
                }
                resolve("ok");
            });
        });
    }
    terminate() {
        if (!this.connection || this.connection.state === "disconnected") {
            console.log("        cannot terminate connection of disconnected state.");
            return;
        }
        return new Promise((resolve, reject) => {
            this.connection.end((err) => {
                if (err) {
                    reject(err.message);
                }
                // delete conneciton object
                delete this.connection;
                resolve("ok");
            });
        });
    }
    query(sql) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, function (error, results) {
                if (error)
                    reject(error);
                resolve(results);
            });
        });
    }
}
;
class defaultQuery extends DatabaseConnector {
    constructor() {
        super();
        this.testUser = {
            username: `'chanyang'`,
            email: `'chanyang@gmail.com'`,
            password: `'password'`,
            mobile: `'010-1234-5678'`,
            createdAt: `'2020-10-10 10:00:12'`,
            updatedAt: `'2020-10-10 10:00:12'`
        };
    }
    find({ table, column }) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.query(`SELECT ${table}.${column} FROM ${table}`);
        });
    }
    setup() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.query(`USE ${this.config.database}`);
            yield this.query(`TRUNCATE TABLE users`);
        });
    }
    tearDown() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.query(`DROP DATABASE IF EXISTS ${this.config.database}`);
            yield this.query(`CREATE DATABASE ${this.config.database}`);
            yield this.query(`USE ${this.config.database}`);
        });
    }
    deleteTestUser({ email }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.query(`DELETE FROM users WHERE email=${email}`);
        });
    }
}
const defaultQueryService = new defaultQuery;
exports.default = defaultQueryService;
