import userModel from '../models/userModel'

function isEmail(email) {
  // eslint-disable-next-line no-useless-escape
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}

function validatePassword(password) {
  const valid = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/
  if (valid.test(password)) return true
  return false
}

export async function registerValidations(data) {
  const errors = []

  const { email, password, roles } = data

  if (!email) errors.push('Email obrigatório')
  if (!isEmail(email)) errors.push('Email inválido')
  if (!password) errors.push('Senha obrigatória')
  if (!roles) errors.push('Função obrigatória')
  if (!validatePassword(password))
    errors.push(
      'A senha deve conter 8 digitos, entre eles maiúsculas, minúsculas e números'
    )

  const user = await userModel.findOne({ email })
  if (user) errors.push('Email já cadastrado')

  return errors
}

export async function loginValidations(data) {
  const errors = []

  const { email, password } = data
  if (!email) errors.push('Email obrigatório')
  if (!isEmail(email)) errors.push('Email inválido')
  if (!password) errors.push('Senha obrigatória')

  return errors
}
