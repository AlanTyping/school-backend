import { runWithPrisma } from "../prisma/prisma.js"
import { prisma } from "../prisma/prisma.js"

export class UsersModel {
  static getAll = async() => {
    return prisma.user.findMany()
  }

  static getById = async ({ id }) => {
    return runWithPrisma(async () => {
      return prisma.user.findUnique({ where: { id: id } })
    })
  }

  static create = async (data) => {
    return runWithPrisma(async () => {
      return prisma.user.create({ data: data })
    })
  }

  static getUserByUsername = async ({ username }) => {
    return runWithPrisma(async () => {
      return prisma.user.findUnique({ where: { username: username } })
    })
  }

  static getUserByEmail = async ({ email }) => {
    return runWithPrisma(async () => {
      return prisma.user.findUnique({ where: { email: email } })
    })
  }
} 
