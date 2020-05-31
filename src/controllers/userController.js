import userModel from '../models/userModel'

async function getAll(req, res) {
  try {
    const data = await userModel.find({}, 'email roles')

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send({ message: 'Erro na requisição!' })
  }
}

async function getById(req, res) {
  try {
    const data = await userModel.findOne({ _id: req.params.id }, 'email roles')

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send({ message: 'Erro na requisição!' })
  }
}

async function update(req, res) {
  try {
    await userModel.findOneAndUpdate({ _id: req.params.id }, req.body)
    return res.status(201).send({ message: 'Usuario editado com sucesso!' })
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function deleteById(req, res) {
  try {
    await userModel.findOneAndDelete({ _id: req.params.id })

    return res.status(200).send({ message: 'usuario deletado com sucesso!' })
  } catch (error) {
    return res.status(400).send({ message: 'Erro na requisição!' })
  }
}

export default { getAll, getById, update, deleteById }
