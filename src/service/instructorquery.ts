import { Service } from 'typedi';
import QueryFormat from "../utils/query"
@Service()
export default class InstructorModel {

    private queryFormat: QueryFormat

    public constructor (QueryFormat: QueryFormat) {
        this.queryFormat = QueryFormat
    }

    public test1(email: string) {
        return email;
    }


}