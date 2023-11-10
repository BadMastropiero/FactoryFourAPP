import { z } from 'zod';

import { serviceStatusSchema } from './schemas';

export type ServiceStatus = z.infer<typeof serviceStatusSchema>;

export type ExtendedServiceStatus = ServiceStatus & {
  title: string;
};
