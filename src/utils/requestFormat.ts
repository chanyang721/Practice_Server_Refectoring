import { Service } from "typedi";


@Service()
export default class MessageFormat {

    public responseFormat(statusCode: number, message: string, error?: Error): Object {
        return { statusCode, message, error }
    }
}
