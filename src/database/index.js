const { connect } = require('mongoose');

const conectionDB = async () => {
  try {
    const options = { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
    // const {connection: db} = await connect(`mongodb://${process.env.db_host}:${process.env.db_port}//${process.env.db_}`, options)
    const {connection: db} = await connect(process.env.URI_DB, options)
    console.log(`Se conecto a => ${db.name}`)
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = conectionDB()