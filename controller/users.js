import { UsersModel } from "../model/users.js";

export class UserController {
    static async getAll(req, res) {
        const result = await UsersModel.getAll();
        if (!result) return res.json({ message: 'inner server error'});

        return res.status(202).json(result);
    }

    static async getById(req, res) {
        const { id } = req.params

        const result = await UsersModel.getById({ id })
        if (!result) return res.json({ message: 'inner server error'})

        return res.status(202).json({message: "HIHIHIH"});
    }
}