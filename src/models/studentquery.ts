import { Service } from 'typedi';
import db from "../database";


@Service()
export default class StudentModel {

    constructor(

    ) {}

    public async createUser(email: string): Promise<any> {
        try{
            let sql = `SELECT * FROM students WHERE email = ?`;
            const duplicUser = await this.Query(sql, [email])
            console.log(duplicUser)
    
            if (!duplicUser[0]) {
                let sql = "INSERT INTO students (nickname, email, lectures) VALUSE (?, ?, ?)";
                const userRecord = await this.Query(sql, [email])
                return { userRecord }
            }
            else {
                throw new Error("중복된 이메일이 존재합니다.");
            }
        }
        catch(err) {
            console.log(err)
            throw new Error("유저 생성을 실패했습니다.");
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



// export const utils = {
//     students: {
//         create: (email: string, callback: Function): void => {
//             const nickName = email.split("@")[0];
            
//             const sql = `INSERT INTO students (nickname, email, lectures) VALUES (?, ?, ?)`;
//             const params = [nickName, email, "{}"]
//             db.query(sql, params, (error, result) => {
//                 if (error) console.log(error);
//                 callback(error, result);
//             })
//         },

//         getList: () => {

//         }
//     },
// }