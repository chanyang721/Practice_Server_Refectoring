import { Service } from 'typedi';
import QueryFormat from "../utils/query";

@Service()
export default class StudentModel {
    private queryFormat: QueryFormat

    public constructor(QueryFormat: QueryFormat) {
        this.queryFormat = QueryFormat;
    }


    public async createUserQuery({ email }: { email: string }): Promise<any> {
        try{
            const nickName = email.split("@")[0];
            
            let sql = `INSERT INTO students (nickname, email, lectures) VALUES (?, ?, ?)`;
            let params = [ nickName, email, "{}" ]
            const userRecord = await this.queryFormat.Query(sql, params)

            return { userRecord }
        }
        catch(err) {
            console.log(err)
        }
    } // 완료

    public async getLectureListsQuery({ id }: { id: string }): Promise<any> {
        try {
            let sql = `SELECT lectures.id, lectures.category, lectures.instructor, lectures.title, lectures.price, lectures.attendance, lectures.created_at
            FROM students
            JOIN lectures_students ON students.id = lectures_students.student_id
            JOIN lectures ON lectures.id = lectures_students.lecture_id
            WHERE students.id = ? AND lectures.open = 1`;
            const lecturesList = await this.queryFormat.Query(sql, [ id ])
            
            return { lecturesList }
        }
        catch (err) {
            console.log(err)
        }
    } // 완료

    public async getLectureListsWithCategoryNameQuery ({ id, name }: { id: string, name: string }): Promise<any> {
        try {
            let sql = `SELECT lectures.id, lectures.category, lectures.instructor, lectures.title, lectures.price, lectures.attendance, lectures.created_at
            FROM students
            JOIN lectures_students ON students.id = lectures_students.student_id
            JOIN lectures ON lectures.id = lectures_students.lecture_id
            WHERE students.id = ? AND lectures.open = 1 AND lectures.category = ?`;
            const lecturesList = await this.queryFormat.Query(sql, [ id, name ])
            
            return { lecturesList }
        }
        catch (err) {
            console.log(err)
        }
    } // 완료

    public async sortStudentByTimeQuery ({ id }: { id: any }): Promise<any> {
        try {
            let sql = `SELECT lectures.id, lectures.category, lectures.instructor, lectures.title, lectures.price, lectures.attendance, lectures.created_at
            FROM students
            JOIN lectures_students ON students.id = lectures_students.student_id
            JOIN lectures ON lectures.id = lectures_students.lecture_id
            WHERE students.id = ? AND lectures.open = 1`;
            const lecturesList: any = await this.queryFormat.Query(sql, [ id ])
            const sortList = lecturesList.sort((a, b) => a.created_at > b.created_at ? -1 : 1)

            return { sortList }
        }
        catch (err) {
            console.log(err)
        }
    } // 완료

    public async sortStudentByAttendanceQuery ({ id }: { id: string }): Promise<any> {
        try {
            let sql = `SELECT lectures.id, lectures.category, lectures.instructor, lectures.title, lectures.price, lectures.attendance, lectures.created_at
            FROM students
            JOIN lectures_students ON students.id = lectures_students.student_id
            JOIN lectures ON lectures.id = lectures_students.lecture_id
            WHERE students.id = ? AND lectures.open = 1`;
            const lecturesList: any = await this.queryFormat.Query(sql, [ id ]);
            const sortList = lecturesList.sort((a, b) => a.attendance > b.attendance ? -1 : 1)
            
            return { sortList }
        }
        catch (err) {
            console.log(err)
        }
    } // 완료
}
