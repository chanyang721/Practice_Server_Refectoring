import { Service } from 'typedi';
import { IregusterLecture } from "../interfaces" 
import QueryFormat from "../utils/query";
import dayjs from 'dayjs';
dayjs().format()

@Service()
export default class LectureModel {

    private queryFormat: QueryFormat;
    
    public constructor(QueryFormat: QueryFormat) {
        this.queryFormat = QueryFormat;
    }

    public async getLectureByIdDetailsQuery (lectureData: any): Promise<any> {
        try {
            const { id } = lectureData;

            let sql = `SELECT title, description, category, price, attendance, lectures.students, lectures.created_at, lectures.updated_at, students.id, students.nickname
            FROM lectures
            JOIN lectures_students ON lectures.id = lectures_students.lecture_id
            JOIN students ON students.id = lectures_students.student_id
            WHERE lectures.id = ?
            GROUP BY lectures_students.lecture.id`;
            let params = [ id ];
            const lecturesInfo: any = await this.queryFormat.Query(sql, params)

            // for (let lecture = 0; lecture < lecturesInfo.length; lecture++) {
            //     let { id, nickname, students } = lecturesInfo
            //     students = JSON.parse(students);
            //     lecturesInfo[lecture].studentsList = { nickname , "registerDay": lecturesInfo.student[id] }
            // }

            return { lecturesInfo }
        }
        catch (err) {
            console.log(err)
        }
    }

    public async getListBylectureNameQuery (lectureData: any): Promise<any> {
        try {

        }
        catch (err) {
            console.log(err)
        }
    }

    public async createLectureQuery (lectureData: any): Promise<any> {
        try {
            const { instructor, category, title, description, price } = lectureData

            let sql = `INSERT INTO lectures (instructor, category, title, description, price) VALUES (?)`;
            let params = [ [ instructor, category[0], title, description, price ] ]
            const lectureRecord = await this.queryFormat.Query(sql, params);
            
            return { lectureRecord };
        }
        catch (err) {
            console.log(err)
        }
    } // 완료

    public async updateLectureInfoQuery (lectureData: any): Promise<any> {
        try {
            const { title, description, price, id } = lectureData;

            let sql = `UPDATE lectures SET title = ?, description = ?, price = ? WHERE id = ?`;
            let params = [ title, description, price, id ];
            const updateLectureInfo = await this.queryFormat.Query(sql, params);

            return { updateLectureInfo };
        }
        catch (err) {
            console.log(err)
        }
    } // 완료 

    public async openLectureQuery (lecturesData: any): Promise<any> {
        try {
            const { id } = lecturesData;
    
            let sql = `UPDATE lectures SET open = 1 WHERE id = ?`;
            let params = [ id ];
            const queryInfo = await this.queryFormat.Query(sql, params)
    
            return { queryInfo };
        }
        catch (err) {
            console.log(err)
        }
    } // 완료 

    public async deleteLecureQuery (lectureData: any): Promise<any> {
        try {
            const { id } = lectureData;

            let sql = `DELETE FROM lectures WHERE id = ?`;
            let params = [ id ];
            const queryInfo = await this.queryFormat.Query(sql, params);

            return { queryInfo }
        }
        catch (err) {
            console.log(err)
        }
    } // 완료 

    public async registerLectureQuery (registerData: any): Promise<any> {
        try {
            const { students, lectureId, studentId } = registerData;
            const registerDay = dayjs().format("YYYY/MM/DD");
    
            students[studentId] = registerDay;
            
            let sql = `UPDATE lectures SET students = ?, attendance = attendance + 1 WHERE id = ${lectureId}`;
            let params = [ JSON.stringify(students) ];
            const updateStudentsInfo = await this.queryFormat.Query(sql, params);

            sql = `INSERT INTO lectures_students (lecture_id, student_id) VALUES (?, ?)`;
            params = [ lectureId, studentId ]
            await this.queryFormat.Query(sql, params);
    
            return { updateStudentsInfo }
        }
        catch (err) {
            console.log(err)
        }
    } // 완료

}