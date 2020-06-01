import { Schema, model } from 'mongoose'

const schema = new Schema({
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
  roles: [
    {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
  ],
})

export default model('userModel', schema)
