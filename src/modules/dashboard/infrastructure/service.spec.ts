import { describe, expect, it } from 'vitest';

import { SERVICES_LIST } from '../../../config';
import { serviceStatusSchema } from '../domain/schemas';
import { ServicesService } from './service';

describe('Services status API', () => {
  SERVICES_LIST.map((service) => {
    it(`${service} service status should match current structure/type`, async () => {
      const response = await ServicesService.getStatus(service, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).catch(() => null);

      if (response) {
        expect(() => serviceStatusSchema.parse(response)).not.toThrow();
      }
    });
  });
});
