import md5 from 'md5'
import userModel from '../models/userModel'

async function create(req, res) {
  try {
    await userModel.create({
      name: req.body.name,
      email: req.body.email,
      surname: req.body.surname,
      role: req.body.role,
      password: md5(req.body.password, process.env.SALT_KEY),
    })
    return res.status(201).send({ message: 'User created with success!' })
  } catch (error) {
    return res.status(201).send({ message: 'ERROR. not created' })
  }
}

async function get(req, res) {
  try {
    const data = await userModel.find({}, 'name surname email role')

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send({ message: 'Erro na requisição!' })
  }
}

async function getById(req, res) {
  try {
    const data = await userModel.findById(
      req.params.id,
      'name surname email role'
    )

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send({ message: 'Erro na requisição!' })
  }
}

async function deleteById(req, res) {
  try {
    await userModel.findByIdAndRemove(req.params.id)

    return res.status(200).send({ message: 'usuario deletado com sucesso!' })
  } catch (error) {
    return res.status(400).send({ message: 'Erro na requisição!' })
  }
}

async function update(req, res) {
  try {
    await userModel.findByIdAndUpdate(req.params.id, req.body, {
      $set: {
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        role: req.body.role,
      },
    })
    return res.status(201).send({ message: 'Usuario editado com sucesso!' })
  } catch (error) {
    return res.status(400).send(error)
  }
}

export default { create, get, getById, deleteById, update }
