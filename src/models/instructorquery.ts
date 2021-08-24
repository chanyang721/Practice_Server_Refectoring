import { Service } from 'typedi';
import QueryFormat from "../utils/query"
@Service()
export default class InstructorModel {

    private queryFormat: QueryFormat

    public constructor (QueryFormat: QueryFormat) {
        this.queryFormat = QueryFormat
    }


    public async getListByNameQuery (name: string) {
        try {
            let sql = `SELECT lectures.id, lectures.category, lectures.title, instructors.name, lectures.price, lectures.students, lectures.created_at
            FROM instructors 
            JOIN lectures ON lectures.instructor = instructors.name
            WHERE name = ? AND lectures.open = 1`;
            const lecturesList = await this.queryFormat.Query(sql, [ name ]);

            return { lecturesList }
        }
        catch (err) {
            console.log(err)
        }
    }; // 완료

    public async getListByInstructorNameAndCategoryNameQuery ({ name, category }: { name: string, category: string }) {
        try {
            let sql = `SELECT lectures.id, lectures.category, lectures.title, instructors.name, lectures.price, lectures.students, lectures.created_at
            FROM instructors 
            JOIN lectures ON lectures.instructor = instructors.name
            WHERE name = ? AND lectures.open = 1 AND lectures.category = ?`;
            const lecturesList = await this.queryFormat.Query(sql, [ name, category ]);

            return { lecturesList }
        }
        catch (err) {
            console.log(err)
        }
    }; 

    public async sortInstructorLectureListByTimeQuery (name: string) {
        try {
            let sql = `SELECT lectures.id, lectures.category, lectures.title, instructors.name, lectures.price, lectures.students, lectures.created_at
            FROM instructors 
            JOIN lectures ON lectures.instructor = instructors.name
            WHERE name = ? AND lectures.open = 1`;
            const lecturesList: any = await this.queryFormat.Query(sql, [ name ]);
            const sortList = lecturesList.sort((a, b) => a.created_at > b.created_at ? -1 : 1)

            return { sortList }
        }
        catch (err) {
            console.log(err)
        }
    }; 

    public async sortInstructorLectureListByAttendanceQuery (name: string) {
        try {
            let sql = `SELECT lectures.id, lectures.category, lectures.title, instructors.name, lectures.price, lectures.students, lectures.created_at
            FROM instructors 
            JOIN lectures ON lectures.instructor = instructors.name
            WHERE name = ? AND lectures.open = 1`;
            const lecturesList: any = await this.queryFormat.Query(sql, [ name ]);
            const sortList = lecturesList.sort((a, b) => a.attendance > b.attendance ? -1 : 1)

            return { sortList }
        }
        catch (err) {
            console.log(err)
        }
    };

}