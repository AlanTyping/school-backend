import bcrypt from 'bcrypt';
import { UsersModel } from '../model/users.js';

export class AuthController {
  static register = async (req, res) => {
    const bodyData = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(bodyData.password, salt);

    const data = {
      username: bodyData.username,
      email: bodyData.email,
      name: bodyData.name,
      lastName: bodyData.lastName,
      password: hashedPassword
    } 

    return res.json(await UsersModel.create(data))
  } 

  static login = async (req, res) => {

  }

  static logout = async (req, res) => {

  }
}
