import bcrypt from 'bcrypt';
import { UsersModel } from '../model/users.js';
import { randomUUID } from 'crypto';

export class AuthController {
  static register = async (req, res) => {
    const bodyData = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(bodyData.password, salt);

    const code = 'manolo'

    const data = {
      username: bodyData.username,
      email: bodyData.email,
      name: bodyData.name,
      lastName: bodyData.lastName,
      password: hashedPassword,
      verificationToken: 'pabliteeeee'
    } 

    const result = await UsersModel.create(data)

    console.log(result)
    if (!result.username) return res.status(400).json(result);

    return res.status(200).json(result)
  } 

  static login = async (req, res) => {

  }

  static logout = async (req, res) => {

  }
}
