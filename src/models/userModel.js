import { Schema, model } from 'mongoose'

const schema = new Schema({
  roles: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
})

export default model('userModel', schema)
