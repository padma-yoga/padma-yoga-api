/* eslint-disable no-console */
/* eslint-disable consistent-return */
import jwt from 'jsonwebtoken'
import md5 from 'md5'
import userModel from '../models/userModel'
import { registerValidations } from '../validations/auth'

async function register(req, res) {
  try {
    const errorList = await registerValidations(req.body)

    if (errorList.length) return res.status(401).send({ errors: errorList })

    await userModel.create({
      email: req.body.email,
      roles: req.body.roles,
      password: md5(req.body.password, process.env.SALT_KEY),
    })

    return res.status(201).send({ message: 'Usuário criado com sucesso!' })
  } catch (error) {
    return res.status(500).json({
      message:
        'Não foi possível criar o usuário. Tente novamente ou entre em contato!',
    })
  }
}
async function generateToken(data) {
  const token = jwt.sign(data, process.env.SALT_KEY, { expiresIn: '1d' })

  return token
}
async function login(req, res) {
  try {
    // TODO: Here we will call a validation service

    const user = await userModel.findOne({
      email: req.body.email,
      password: md5(req.body.password, process.env.SALT_KEY),
    })

    if (!user)
      return res.status(400).send({ message: 'Email ou senha inválidos!' })

    const token = await generateToken({
      email: req.body.email,
      password: req.body.password,
    })

    return res.status(200).send({ user, token })
  } catch (error) {
    return res.status(500).send({ message: 'ERRO do servidor!' })
  }
}

export default { register, login }
