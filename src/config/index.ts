import dotenv from "dotenv";
dotenv.config();

const config = {
    development: {
        host: 'localhost',
        user: 'root',
        password: process.env.DATABASE_PASSWORD,
        database: 'Inflearn'
    },
    test: {
        host: 'localhost',
        user: 'root',
        password: process.env.DATABASE_PASSWORD,
        database: 'Inflearn_test'
    }
};

export default config