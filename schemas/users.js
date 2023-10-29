import { z } from 'zod';

// const movieSchema = z.object({
//   title: z.string({
//     invalid_type_error: 'Mocie title must be a string'
//   }),
//   year: z.number().int().min(1900).max(2024),
//   director: z.string(),
//   duration: z.number().int().positive(),
//   rate: z.number().min(0).max(10),
//   poster: z.string().url()
// })


const userSchema = z.object({
    id: z.string().min(60).max(60).optional(),
    username: z.string().min(1).max(25),
    email: z.string().email().max(50),
    password: z.string().min(10).max(60),
    name: z.string().min(1).max(25),
    lastName: z.string().min(1).max(25),
    isAdmin: z.boolean().optional()
})

const object = {
    email: 'manolo@gmail.com',
    username: 'manolo_mendenitemetrica',
    password: 'jejejijejejejeiiji',
    name: 'manolo',
}

export async function validateUser(object) {
    return userSchema.safeParse(object)
}

export async function validatePartialUser(object) {
    return userSchema.partial().safeParse(object)
}
