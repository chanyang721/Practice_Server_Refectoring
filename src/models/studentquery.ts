import { Service } from 'typedi';
import db from "../database";

@Service()
export default class StudentModel {

    public async createUser(email: string): Promise<any> {
        try{
            let sql = `SELECT * FROM students WHERE email = ?`;
            const duplicUser = await this.Query(sql, [ email ])
    
            if (!duplicUser[0]) {
                const nickName = email.split("@")[0];
                const params = [ nickName, email, "{}" ]
                
                let sql = `INSERT INTO students (nickname, email, lectures) VALUES (?, ?, ?)`;
                const userRecord = await this.Query(sql, params)
                return { userRecord }
            }
            else {
                return { userRecord: null }
            }
        }
        catch(err) {
            console.log(err)
        }
    }


    public async getLectureLists(id: string): Promise<any> {
        try {
            let sql = `SELETE * FROM students WHERE id = ?`;
            const lecturesList = await this.Query(sql, [ id ])
            
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
