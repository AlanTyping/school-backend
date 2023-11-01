import { runWithPrisma } from "../prisma/prisma.js";
import { prisma } from "../prisma/prisma.js";

export class VerifyModel {
    static getByVerificationToken = async ({ token }) => {
        return runWithPrisma(async () => {
            return prisma.user.findUnique({ where: { verification_token: token } })
        })
    }
}