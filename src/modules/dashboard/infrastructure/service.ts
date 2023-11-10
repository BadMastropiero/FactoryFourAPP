import { endpoints } from '../../../config';
import { serviceStatusSchema } from '../domain/schemas';
import { ServiceStatus } from '../domain/types';

const error_status: ServiceStatus = {
  success: false,
  message: 'Error',
  time: undefined,
  hostname: '',
};

async function getStatus(name: string, init?: RequestInit) {
  let res = null;
  try {
    res = await fetch(endpoints.service(name), {
      headers: {
        'Content-Type': 'application/json',
        ...init?.headers,
      },
      ...init,
    });
    if (!res.ok) {
      return error_status;
    }
  } catch (err) {
    /* empty */
  }

  if (!res?.ok) {
    const data: ServiceStatus = {
      ...error_status,
      message: `${res?.status || ''}`,
    };
    return data;
  }

  let data: ServiceStatus;
  try {
    data = serviceStatusSchema.parse(await res.json());
  } catch {
    data = error_status;
  }

  return data;
}

export const ServicesService = {
  getStatus,
};
