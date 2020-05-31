import { model, Schema } from 'mongoose'

const schema = new Schema({
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    trim: true,
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
