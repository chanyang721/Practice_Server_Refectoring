import db from "../database";
import { Service } from "typedi";

@Service()
export default class QueryFormat {
    
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
