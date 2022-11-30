module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT'),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      ssl: env.bool('DATABASE_SSL'),
    },
    pool: {
      min: 0,
      max: 5,
    }
  },
});


// const parse = require('pg-connection-string').parse;
// const config = parse(process.env.DATABASE_URL);

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST'),
//       port: env.int('DATABASE_PORT'),
//       database: env('DATABASE_NAME'),
//       user: env('DATABASE_USERNAME'),
//       password: env('DATABASE_PASSWORD'),
//       ssl: env.bool('DATABASE_SSL'),
//     },
//     pool: {
//       min: 0,
//       max: 5,
//     },
//     debug: false,
//   },
// });
