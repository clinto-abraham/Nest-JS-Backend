const dotenv = require("dotenv");
dotenv.config()
module.exports = {
    "development": {
        "username": process.env.POSTGRES_USER,
        "password": process.env.POSTGRES_USER_PASSWORD,
        "database": process.env.POSTGRES_DATABASE_NAME,
        "host": "localhost",
        "port": 5432,
        "dialect": "postgres",
        // Use a different storage. Default: none
        "seederStorage": "json",
        // Use a different file name. Default: sequelize-data.json
        "seederStoragePath": "sequelizeData.json",
        // Use a different table name. Default: SequelizeData
        "seederStorageTableName": "sequelize_data"
    },
    "test": {
        "username": process.env.POSTGRES_USER,
        "password": process.env.POSTGRES_USER_PASSWORD,
        "database": process.env.POSTGRES_DATABASE_NAME,
        "host": "localhost",
        "port": 5432,
        "dialect": "postgres",
        // Use a different storage. Default: none
        "seederStorage": "json",
        // Use a different file name. Default: sequelize-data.json
        "seederStoragePath": "sequelizeData.json",
        // Use a different table name. Default: SequelizeData
        "seederStorageTableName": "sequelize_data"
    },
    "production": {
        "username": process.env.POSTGRES_USER,
        "password": process.env.POSTGRES_USER_PASSWORD,
        "database": process.env.POSTGRES_DATABASE_NAME,
        "host": "localhost",
        "port": 5432,
        "dialect": "postgres",
        // Use a different storage. Default: none
        "seederStorage": "json",
        // Use a different file name. Default: sequelize-data.json
        "seederStoragePath": "sequelizeData.json",
        // Use a different table name. Default: SequelizeData
        "seederStorageTableName": "sequelize_data"
    }
}