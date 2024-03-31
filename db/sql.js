import {Sequelize} from "sequelize";

export const sequelize = new Sequelize(
    process.env.SQL_DB_NAME,
    process.env.SQL_USERNAME,
    process.env.SQL_PASSWORD,
    {
        host: process.env.SQL_HOST,
        dialect: process.env.SQL_DB_TYPE
    }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});