const { dotenv } = require("../commons");
dotenv.config();

// AWS
exports.bucketName = process.env.AWS_BUCKET_NAME;
exports.region = process.env.AWS_REGION;
exports.secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
exports.accessKeyId = process.env.AWS_ACCESS_KEY_ID;
exports.sessionToken = process.env.AWS_SESSION_TOKEN;

// Express app
exports.EXPRESS_APP_BASE_URL = process.env.EXPRESS_APP_BASE_URL;

// Auth0
exports.AUTH0_SECRET = process.env.AUTH0_SECRET;
exports.AUTH0_CLIENT_ID = process.env.AUTH0_CLIENT_ID;
exports.AUTH0_ISSUER_BASE_URL = process.env.AUTH0_ISSUER_BASE_URL;
exports.TOKEN_SIGNING_ALG = process.env.TOKEN_SIGNING_ALG;

// Postgres DB
// exports.POSTGRES_LOCALHOST = process.env.POSTGRES_LOCALHOST;
// exports.POSTGRES_USER = process.env.POSTGRES_USER;
// exports.POSTGRES_USER_PASSWORD = process.env.POSTGRES_USER_PASSWORD;
// exports.POSTGRES_PORT = process.env.POSTGRES_PORT;
// exports.POSTGRES_DATABASE_NAME = process.env.POSTGRES_DATABASE_NAME;
// exports.POSTGRES_DATABASE_URL = process.env.POSTGRES_DATABASE_URL;
