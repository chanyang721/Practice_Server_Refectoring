import { Service } from 'typedi';
import { IdetailLecture, IdefaultLecture, IcreateLecture, IupdateLectureInfo, IregisterLecture } from "../interfaces" 
import QueryFormat from "../utils/query";
import dayjs from 'dayjs';

@Service()
export default class LectureModel {

    private queryFormat: QueryFormat;
    public defaultSelect;
    
    public constructor(QueryFormat: QueryFormat) {
        this.queryFormat = QueryFormat;
        this.defaultSelect = `lectures.id as lectureId, lectures.category, lectures.title, lectures.instructor, lectures.price, lectures.attendance, lectures.students, lectures.created_at, lectures.updated_at`;
    }

    public async getListBylectureTitleOrinstructorNameQuery (lectureData: { name: string }): Promise<IdefaultLecture> {
        try {
            const { name } = lectureData;

            let sql = `SELECT ${this.defaultSelect}
            FROM instructors 
            JOIN lectures ON lectures.instructor = instructors.name
            WHERE lectures.open = 1 
            AND (name LIKE "%${name}%" OR title LIKE "%${name}%")
            ORDER BY lectures.attendance DESC`;
            let lecturesList: any = await this.queryFormat.Query(sql);
            lecturesList = lecturesList.map(el => el = { ...el, students: JSON.parse(el.students) });

            return { lecturesList }
        }
        catch (err) {
            console.log(err)
        }
    }

    public async getListAddConditionCategoryNameQuery (lectureData: { name: string, category: string }): Promise<IdefaultLecture> {
        try {
            const { name, category } = lectureData;

            let sql = `SELECT ${this.defaultSelect}
            FROM lectures
            JOIN instructors ON lectures.instructor = instructors.name
            WHERE (lectures.open = 1 AND lectures.category = ?) 
            AND (instructors.name LIKE "%${name}%" OR lectures.title LIKE "%${name}%")`;
            let params = [ category ];
            let lecturesList: any = await this.queryFormat.Query(sql, params)
            lecturesList = lecturesList.map(el => el = { ...el, students: JSON.parse(el.students) });

            return { lecturesList }
        }
        catch (err) {
            console.log(err)
        }
    }

    public async getLectureByIdDetailQuery (lectureData: { id: string }): Promise<IdetailLecture> {
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

    public async sortLecturesByTimeQuery (lectureData: { name: string }): Promise<IdefaultLecture> {
        try {
            const { name } = lectureData;

            let sql = `SELECT ${this.defaultSelect}
            FROM instructors 
            JOIN lectures ON lectures.instructor = instructors.name
            WHERE lectures.open = 1 
            AND (instructors.name LIKE "%${name}%" OR lectures.title LIKE "%${name}%")
            ORDER BY lectures.created_at DESC`;
            let lecturesList: any = await this.queryFormat.Query(sql);
            lecturesList = lecturesList.map(el => el = { ...el, students: JSON.parse(el.students) });

            return { lecturesList }
        }
        catch (err) {
            console.log(err)
        }
    }

    public async sortLecturesByAttendanceQuery (lectureData: { name: string }): Promise<IdefaultLecture> {
        try {
            const { name } = lectureData;

            let sql = `SELECT ${this.defaultSelect}
            FROM instructors 
            JOIN lectures ON lectures.instructor = instructors.name
            WHERE lectures.open = 1
            AND (name LIKE "%${name}%" OR title LIKE "%${name}%")
            ORDER BY lectures.attendance DESC`;
            let lecturesList: any = await this.queryFormat.Query(sql);
            lecturesList = lecturesList.map(el => el = { ...el, students: JSON.parse(el.students) });

            return { lecturesList }
        }
        catch (err) {
            console.log(err)
        }
    }

    public async createLectureQuery (lectureData: IcreateLecture): Promise<any> {
        try {
            const { instructor, category, title, description, price } = lectureData

            let sql = `INSERT INTO lectures (instructor, category, title, description, price) VALUES (?)`;
            let params = [ [ instructor, category[0], title, description, price ] ]
            const lectureRecord: any = await this.queryFormat.Query(sql, params);
            
            return { lectureRecord };
        }
        catch (err) {
            console.log(err)
        }
    }

    public async updateLectureInfoQuery (lectureData: IupdateLectureInfo): Promise<any> {
        try {
            const { title, description, price, id } = lectureData;

            let sql = `UPDATE lectures SET title = ?, description = ?, price = ? WHERE id = ?`;
            let params = [ title, description, price, id ];
            const updateLectureInfo: any = await this.queryFormat.Query(sql, params);

            return { updateLectureInfo };
        }
        catch (err) {
            console.log(err)
        }
    } 

    public async openLectureQuery (lecturesData: { id: string }): Promise<any> {
        try {
            const { id } = lecturesData;
    
            let sql = `UPDATE lectures SET open = 1 WHERE id = ?`;
            let params = [ id ];
            const queryInfo: any = await this.queryFormat.Query(sql, params)
    
            return { queryInfo };
        }
        catch (err) {
            console.log(err)
        }
    } 

    public async deleteLectureQuery (lectureData: { id: string }): Promise<any> {
        try {
            const { id } = lectureData;

            let sql = `DELETE FROM lectures WHERE id = ?`;
            let params = [ id ];
            const queryInfo: any = await this.queryFormat.Query(sql, params);

            return { queryInfo }
        }
        catch (err) {
            console.log(err)
        }
    } 

    public async registerLectureQuery (registerData: IregisterLecture): Promise<any> {
        try {
            const { students, nickname, lectureId, studentId } = registerData;
            const registerDay = dayjs().format("YYYY/MM/DD");
    
            students[studentId] = { nickname, registerDay };
            
            let sql = `UPDATE lectures SET students = ?, attendance = attendance + 1 WHERE id = ?`;
            let params = [ JSON.stringify(students), lectureId ];
            const updateStudentsInfo: any = await this.queryFormat.Query(sql, params);

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