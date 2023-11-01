import { VerifyModel } from "../model/verify.js";

export class VerifyController {
    static async handleCode(req, res) { 
        const { token } = req.query;

        const result = await VerifyModel.getByVerificationToken({ token });

        if (!result) return res.status(400).json(result);

        return res.status(400).json(result);

        return res.send(`Your params: ${verificationToken}`);
    }
}