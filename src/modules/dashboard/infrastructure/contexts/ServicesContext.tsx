import { createContext, ReactNode, useContext, useMemo } from 'react';
import { useQueries } from 'react-query';

import { SERVICE_STATUS_REFRESH_INTERVAL, SERVICES_LIST } from '../../../../config';
import { ExtendedServiceStatus, ServiceStatus } from '../../domain/types';
import { ServicesService } from '../service';

interface IContextState {
  services: (ExtendedServiceStatus | undefined)[];
}

const initialState: IContextState = {
  services: [],
};

export const ServicesContext = createContext<IContextState>(initialState);

export function ServicesProvider({ children }: { children?: ReactNode | ReactNode[] }) {
  const queryConfigs = SERVICES_LIST.map((service) => ({
    queryKey: ['service', service],
    queryFn: () => ServicesService.getStatus(service),
    refresherInterval: SERVICE_STATUS_REFRESH_INTERVAL,
  }));

  const queryResults = useQueries(queryConfigs);

  const state = useMemo(
    () => ({
      services: queryResults.map((qr, i) => ({
        ...(qr.data as ServiceStatus),
        title: queryConfigs[i].queryKey[1],
      })),
    }),
    [queryResults],
  );

  return <ServicesContext.Provider value={state}>{children}</ServicesContext.Provider>;
}

export function useServices() {
  const state = useContext(ServicesContext);

  if (state === undefined) {
    throw new Error('useServices must be used within a ServicesProvider');
  }

  return state;
}
