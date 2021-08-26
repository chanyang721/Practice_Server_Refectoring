import { Service } from 'typedi';
import { IdetailLecture } from "../interfaces" 
import QueryFormat from "../utils/query";
import dayjs from 'dayjs';
dayjs().format()

@Service()
export default class LectureModel {

    private queryFormat: QueryFormat;
    
    public constructor(QueryFormat: QueryFormat) {
        this.queryFormat = QueryFormat;
    }

    public async getListBylectureTitleOrinstructorNameQuery (lectureData: any): Promise<any> {
        try {
            const { name } = lectureData;

            let sql = `SELECT lectures.id as lectureId, lectures.category, lectures.title, lectures.instructor, lectures.price, lectures.attendance, lectures.students, lectures.created_at
            FROM instructors 
            JOIN lectures ON lectures.instructor = instructors.name
            WHERE name LIKE "%${name}%" OR title LIKE "%${name}%" AND lectures.open = 1 
            ORDER BY lectures.attendance DESC`;
            let lecturesList: any = await this.queryFormat.Query(sql);
            lecturesList = lecturesList.map(el => el = { ...el, students: JSON.parse(el.students) });

            return { lecturesList }
        }
        catch (err) {
            console.log(err)
        }
    }

    public async getListAddConditionCategoryNameQuery (lectureData: any): Promise<any> {
        try {
            const { name, category } = lectureData;

            let sql = `SELECT lectures.id as lectureId, lectures.category, lectures.title, lectures.instructor, lectures.price, lectures.attendance, lectures.students, lectures.created_at, lectures.updated_at
            FROM lectures
            JOIN instructors ON lectures.instructor = instructors.name
            WHERE instructors.name LIKE "%${name}%" OR lectures.title LIKE "%${name}%" AND lectures.category = ? AND lectures.open = 1`;
            let params = [ category ];
            let lecturesList: any = await this.queryFormat.Query(sql, params)
            lecturesList = lecturesList.map(el => el = { ...el, students: JSON.parse(el.students) });

            return { lecturesList }
        }
        catch (err) {
            console.log(err)
        }
    }

    public async getLectureByIdDetailQuery (lectureData: any): Promise<IdetailLecture> {
        try {
            const { id } = lectureData;

            let sql = `SELECT title, description, category, price, attendance, students, created_at, updated_at
            FROM lectures
            WHERE lectures.id = ?`;
            let params = [ id ];
            let lecturesList: any = await this.queryFormat.Query(sql, params)
            lecturesList = lecturesList.map(el => el = { ...el, students: JSON.parse(el.students) });

            return { lecturesList }
        }
        catch (err) {
            console.log(err)
        }
    }

    public async sortLecturesByTimeQuery (lectureData: any): Promise<any> {
        try {
            const { title } = lectureData;

            let sql = `SELECT lectures.id as lectureId, lectures.category, lectures.title, lectures.instructor, lectures.price, lectures.attendance, lectures.students, lectures.created_at
            FROM instructors 
            JOIN lectures ON lectures.instructor = instructors.name
            WHERE name LIKE "%${title}%" OR title LIKE "%${title}%" AND lectures.open = 1 
            ORDER BY lectures.created_at DESC`;
            let lecturesList: any = await this.queryFormat.Query(sql);
            lecturesList = lecturesList.map(el => el = { ...el, students: JSON.parse(el.students) });

            return { lecturesList }
        }
        catch (err) {
            console.log(err)
        }
    }

    public async sortLecturesByAttendanceQuery (lectureData: any): Promise<any> {
        try {
            const { title } = lectureData;

            let sql = `SELECT lectures.id as lectureId, lectures.category, lectures.title, lectures.instructor, lectures.price, lectures.attendance, lectures.students, lectures.created_at
            FROM instructors 
            JOIN lectures ON lectures.instructor = instructors.name
            WHERE name LIKE "%${title}%" OR title LIKE "%${title}%" AND lectures.open = 1 
            ORDER BY lectures.attendance DESC`;
            let lecturesList: any = await this.queryFormat.Query(sql);
            lecturesList = lecturesList.map(el => el = { ...el, students: JSON.parse(el.students) });

            return { lecturesList }
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
    }

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
    } 

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
    } 

    public async deleteLectureQuery (lectureData: any): Promise<any> {
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
    } 

    public async registerLectureQuery (registerData: any): Promise<any> {
        try {
            const { students, nickname, lectureId, studentId } = registerData;
            const registerDay = dayjs().format("YYYY/MM/DD");
    
            students[studentId] = { nickname, registerDay };
            
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
    }

}