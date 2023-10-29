import { UsersModel } from "../model/users.js";
import { validateUser } from "../schemas/users.js";
import bcrypt from 'bcrypt';

export class UsersMiddlewares {
  static userSchemaVerification = async (req, res, next) => {
    const result = await validateUser(req.body)
    
    if (!result.success) return res.status(403).json({ message: result.error.issues[0].message });
    next()
  }

  static userExist = async (req, res, next) => {
    const { username, email } = req.body;

    const usernameExists = await UsersModel.getUserByUsername({ username });
    if (usernameExists) return res.status(409).json({message: 'El usuario ya existe'});
    
    const emailExists = await UsersModel.getUserByEmail({ email });
    if (emailExists) return res.status(409).json({message: 'El email ya está en uso'});

    next()
  }

  static userPassword = async (req, res, next) => {
    const { username, password } = req.body;

    const usernameExists = await UsersModel.getUserByUsername({ username });
    if (!usernameExists) return res.status(404).json({message: `Nombre de usuario no existe`});    

    const checkedPassword = await bcrypt.compare(password, usernameExists.password);
    
    if (!checkedPassword) return res.status(400).json({message: `Contraseña o usuario incorrectos`}); 
  
    req.body = usernameExists;
    next()
  }
}