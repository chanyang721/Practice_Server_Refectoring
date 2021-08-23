import { Service } from 'typedi';
import db from "../database";

@Service()
export default class StudentModel {

    public async createUser(email: string): Promise<any> {
        try{
            const nickName = email.split("@")[0];
            const params = [ nickName, email, "{}" ]
            
            let sql = `INSERT INTO students (nickname, email, lectures) VALUES (?, ?, ?)`;
            const userRecord = await this.Query(sql, params)

            return { userRecord }
        }
        catch(err) {
            console.log(err)
        }
    }


    public async getLectureLists(id: string): Promise<any> {
        try {
            let sql = `SELECT * FROM students
            JOIN lectures_students ON students.id === lectures_students.student_id
            JOIN lectures ON lectures_students.lecture_id === lectures.id
            WHERE students.id = ?`;
            const lecturesList = await this.Query(sql, [ id ])
            
            return { lecturesList }
        }
        catch (err) {
            console.log(err)
        }
    }


    public Query(sql, params?) {
        return new Promise((resolve, reject) =>{
            db.query(sql, params, (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    }

}
