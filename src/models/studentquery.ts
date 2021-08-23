import { Service } from 'typedi';
import db from "../database";
import QueryFormat from "../utils/query";

@Service()
export default class StudentModel {
    private queryFormat: QueryFormat

    public constructor(QueryFormat: QueryFormat) {
        this.queryFormat = QueryFormat;
    }


    public async createUser(email: string): Promise<any> {
        try{
            const nickName = email.split("@")[0];
            const params = [ nickName, email, "{}" ]
            
            let sql = `INSERT INTO students (nickname, email, lectures) VALUES (?, ?, ?)`;
            const userRecord = await this.queryFormat.Query(sql, params)

            return { userRecord }
        }
        catch(err) {
            console.log(err)
        }
    } // 완료

    public async getLectureLists(id: string): Promise<any> {
        try {
            let sql = `SELECT * FROM students
            JOIN lectures_students ON students.id === lectures_students.student_id
            JOIN lectures ON lectures_students.lecture_id === lectures.id
            WHERE students.id = ?`;
            const lecturesList = await this.queryFormat.Query(sql, [ id ])
            
            return { lecturesList }
        }
        catch (err) {
            console.log(err)
        }
    }
}
