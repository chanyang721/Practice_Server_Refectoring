import { Service } from 'typedi';
import db from "../database";

export default class InstructorModel {


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