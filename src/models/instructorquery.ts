import { Service } from 'typedi';
import db from "../database";
@Service()
export default class InstructorModel {


    public async getListByName (name: string) {
        try {
            let sql = `SELECT * FROM instructors WHERE instructors_name = ?`;
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