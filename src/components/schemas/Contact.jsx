import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, "El nombre es obligatorio")
    .min(3, "El nombre debe tener al menos 2 caracteres"),
  lastname: z
    .string()
    .min(1, "El apellido es obligatorio")
    .min(3, "El apellido debe tener al menos 2 caracteres"),
  email: z.string().min(1, { message: "El email es obligatorio" }),
  //.email({ message: "El email no es válido" }), // DESUSO?
});

//export type Contact = z.infer<typeof contactSchema>;
// Esto solo funciona en TypeScript, no en JavaScript
