import { Service } from 'typedi';
import QueryFormat from "../utils/query"
@Service()
export default class InstructorModel {

    private queryFormat: QueryFormat

    public constructor (QueryFormat: QueryFormat) {
        this.queryFormat = QueryFormat
    }


    public async getListByName (name: string) {
        try {
            // 강사 이름이 같은 강의들만 가져온다.
            let sql = `SELECT lectures.id, lectures.category, lectures.title, instructors.name, lectures.price, lectures.students, lectures.created_at
            FROM instructors 
            JOIN lectures ON lectures.instructor = instructors.name
            WHERE name = ? AND lectures.open = 1`;
            const lecturesList = await this.queryFormat.Query(sql, [ name ]);
            console.log(lecturesList)
            lecturesList
            

            return { lecturesList }
        }
        catch (err) {
            console.log(err)
        }
    } // 완료

}