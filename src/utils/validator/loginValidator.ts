import { z } from "zod";

export const loginValidator = z.object({
    username: z.string()
        .nonempty('Username tidak boleh kosong')
        .min(3, 'Username minimal 3 karakter')
        .max(15, 'Username maksimal 16 karakter'),
    password: z.string()
        .nonempty('Password tidak boleh kosong')
        .min(6, 'Password minimal 6 karakter')
})

export type LoginValidator = z.infer<typeof loginValidator>