import { Service } from 'typedi';
import db from "../database";
@Service()
export default class LectureModel {


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