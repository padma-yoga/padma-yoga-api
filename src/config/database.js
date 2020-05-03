import mongoose from 'mongoose'

function startDatabase(CONNECTION_STRING) {
  if (!CONNECTION_STRING)
    throw Error(`Connection string is required to start database`)

  mongoose.connect(CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })

  return mongoose
}

export default startDatabase
