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


    public async createLectureQuery (lectureData: any): Promise<any> {
        try {
            const { instructor, category, title, description, price } = lectureData

            let sql = `SELECT * FROM instructors WHERE name = ?`;
            let params = [ instructor ];
            const instructorInfo = await this.queryFormat.Query(sql, params);
            console.log(instructorInfo)

            sql = `INSERT INTO lectures (instructor, category, title, description, price) VALUES (?)`;
            params = [ [ instructor, category[0], title, description, price ] ]
            const lectureRecord = await this.queryFormat.Query(sql, params);
            
            return { lectureRecord };
        }
        catch (err) {
            console.log(err)
        }
    }

    public async registerLectureQuery (registerData: IregusterLecture): Promise<any> {
        try {
            const { students, lectureId, studentId } = registerData;
            
            const registerDay = dayjs().format("YYYY/MM/DD");
    
            students[studentId] = registerDay;
            
            let sql = `UPDATE lectures SET students = ? WHERE id = ${lectureId}`;
            let params = [ JSON.stringify(students) ];
            const updateStudentsInfo = await this.queryFormat.Query(sql, params);
    
            return { updateStudentsInfo }
        }
        catch (err) {
            console.log(err)
        }
    }

}