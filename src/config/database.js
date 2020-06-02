import mongoose from 'mongoose'

function startDatabase(connectionString) {
  if (!connectionString)
    throw Error(`Connection string is required to start database`)

  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })

  return mongoose
}

export default startDatabase
