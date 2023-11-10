import { z } from 'zod';

export const serviceStatusSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  hostname: z.string(),
  time: z.number().optional(),
});
