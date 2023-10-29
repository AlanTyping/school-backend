import { PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient();

export async function runWithPrisma(callback) {
  try {
    return await callback();
  } catch (error) {
    console.error(`Prisma Error during`, error);
    return error
  } finally {
    await prisma.$disconnect();
  }
} 