export const configFileOption = 
{
    "aws": { 
        "s3": { 
            "accessKeyId":     "YOUR_AWS_ACCESS_KEY_ID", 
            "secretAccessKey": "YOUR_AWS_SECRET_ACCESS_KEY", 
            "region":          "YOUR_AWS_REGION", 
            "bucketName":      "YOUR_S3_BUCKET_NAME" 
        }
    },
    "database": { 
        "username": "root", 
        "password": "root", 
        "database_name": "YOUR_DATABASE_NAME",
        "dialect":  "mysql",  // mysql sqlite mongodb postgres
        "host":     "127.0.0.1", 
        "port":     "YOUR_DATABASE_PORT", 
    },
    "backup": {
        "storage":     "local", // or "cloud" 
        "type":        "full", 
        "schedule":    "daily", 
        "compression": "gzip", 
        "localPath":   "/path/to/local/backups/", 
    }
}

export const databaseNameMap = {
    POSTGE_SQL: 'postgres',
    MYSQL: 'mysql',
    MONGO_DB: 'mongodb',
    SQL_LITE: 'sqlite',
};
export type TDatabaseName = typeof databaseNameMap[keyof typeof databaseNameMap];

export const databaseChoices = Object.entries(databaseNameMap).map(([value, name]) => ({
    name,
    value,
}));

export const databasePortMap = {
    POSTGE_SQL: 1,
    MYSQL: 3306,
    MONGO_DB: 27017,
    sqlite: 2,
};

export const config = configFileOption;