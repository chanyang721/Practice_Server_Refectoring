
const messageFormat = (statusCode: number, message: string, error?: Error): Object => {
    return { statusCode, message, error }
};

export default messageFormat