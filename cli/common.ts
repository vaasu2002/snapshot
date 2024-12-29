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