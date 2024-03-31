import {sequelize} from "./db/sql.js";

sequelize.sync().then(() => {
    console.log('Tables are in sync!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

