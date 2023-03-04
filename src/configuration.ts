export default () => ({
  database: {
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    schema: process.env.DATABASE_SCHEMA,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,

  },
  jwt_secret: process.env.JWT_SECRET,
  salt:process.env.SALT
});
