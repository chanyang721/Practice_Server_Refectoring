import { Service } from 'typedi';
import db from "../database";
@Service()
export default class LectureModel {


    public async makeLecture (lectureData: any): Promise<any> {
        try {
            const { instructor, category, title, description, price } = lectureData

            let sql = `SELECT id FROM instructors WHERE name = ?`;
            let params = [ instructor ]
            const instructorData = await this.Query(sql, params);

            sql = `INSERT INTO lectures (instructor, category, title, description, price, instructor_id) VALUES (?)`;
            params = [ [ instructor, category[0], title, description, price, instructorData[0].id ] ]
            const lectureRecord = await this.Query(sql, params);
            
            return { lectureRecord };
        }
        catch (err) {
            console.log(err)
        }
    }


    public Query(sql, params?) {
        return new Promise((resolve, reject) =>{
            db.query(sql, params, (err, result) => {
                if (err)
                    return reject(err);
                resolve(result);
            });
        });
    }
}