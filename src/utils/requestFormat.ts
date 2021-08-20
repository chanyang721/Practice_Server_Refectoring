import { Service } from "typedi";


@Service()
export default class MessageFormat {

    public responseFormat(statusCode: number, message: string, data?: any, error?: Error): Object {
        return { statusCode, message, data, error }
    }
}
