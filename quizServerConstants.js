//------------------------------------------------------------------------
//  Database (ElephantSQL 21)
//------------------------------------------------------------------------
exports.REMOTE_KNEX_CLIENT = 'pg'
exports.REMOTE_KNEX_PORT = 5432
exports.REMOTE_KNEX_HOST = 'rosie.db.elephantsql.com'
exports.REMOTE_KNEX_USER = 'wdscnzxj'
exports.REMOTE_KNEX_PWD = 'O-7H6IKT6Hhi_xGU7J_rHSBjvbNO218s'
exports.REMOTE_KNEX_DATABASE = 'wdscnzxj'
exports.REMOTE_URL_PORT = 9101
//------------------------------------------------------------------------
//  Database (Local)
//------------------------------------------------------------------------
exports.LOCAL_KNEX_CLIENT = 'pg'
exports.LOCAL_KNEX_HOST = '127.0.0.1'
exports.LOCAL_KNEX_USER = 'richa'
exports.LOCAL_KNEX_PWD = 'london'
exports.LOCAL_KNEX_DATABASE = 'Quiz021'
exports.LOCAL_URL_PORT = 8101
//------------------------------------------------------------------------
//  URL
//------------------------------------------------------------------------
exports.URL_TABLES = '/QuizTables'
exports.URL_REGISTER = '/QuizRegister'
exports.URL_SIGNIN = '/QuizSignin'
//---------------------------------------------------------------------
//  corsWhitelist
//---------------------------------------------------------------------
exports.CORS_WHITELIST = [
  'https://quizclient021.netlify.app',
  'http://localhost:8103',
  'http://localhost:9103',
  'http://localhost:9113',
  'https://quizclient021.netlify.app/',
  'http://localhost:8103/',
  'http://localhost:9103/',
  'http://localhost:9113/'
]
