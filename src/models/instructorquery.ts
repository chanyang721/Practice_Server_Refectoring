import { Service } from 'typedi';
import db from "../database";
@Service()
export default class InstructorModel {


    public async getListByName (name: string) {
        try {
            // 강사 이름이 같은 강의들만 가져온다.
            let sql = `SELECT * FROM instructors 
            JOIN lectures ON 
            WHERE instructors_name = ?`;
            const lecturesList = await this.Query(sql, [ name ]);

            return { lecturesList }
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