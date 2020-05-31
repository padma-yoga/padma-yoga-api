/* eslint-disable no-console */
/* eslint-disable consistent-return */
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
      password: md5(req.body.password + process.env.SALT_KEY),
    })

    return res.status(201).send({ message: 'Usuário criado com sucesso!' })
  } catch (error) {
    return res.status(401).send({
      message:
        'Não foi possível criar o usuário. Tente novamente ou entre em contato!',
    })
  }
}

async function login(req, res) {
  try {
    const data = await userModel.find({
      email: req.body.email,
      password: md5(req.body.password + process.env.SALT_KEY),
    })

    if (!data)
      return res.status(401).json({ ERROR: 'Usuario ou senha invalidos!' })

    console.log(`Data : ${data}`)
    return res
      .status(200)
      .send({ message: 'Login efetuado com sucesso!', data: data })
  } catch (error) {
    return res.status(401).send({ message: 'ERRO no Login!' })
  }
}

export default { register, login }
