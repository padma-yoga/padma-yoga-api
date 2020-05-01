import mongoose from 'mongoose'

function startDatabase(connectionString) {
  if (!connectionString)
    throw Error(`Connection string is required to start database`)

  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })

  return mongoose
}

export default startDatabase
