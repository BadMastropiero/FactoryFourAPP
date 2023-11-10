import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { useQueries } from 'react-query';

import { SERVICE_STATUS_REFRESH_INTERVAL, SERVICES_LIST } from '../../../../config';
import { ExtendedServiceStatus, ServiceStatus } from '../../domain/types';
import { ServicesService } from '../service';

interface IContextState {
  services: (ExtendedServiceStatus | undefined)[];
  history: {
    [title: string]: ServiceStatus[];
  };
}

const initialState: IContextState = {
  services: [],
  history: {},
};

export const ServicesContext = createContext<IContextState>(initialState);

export function ServicesProvider({ children }: { children?: ReactNode | ReactNode[] }) {
  const [history, setHistory] = useState<IContextState['history']>({});

  const queryConfigs = SERVICES_LIST.map((service) => ({
    queryKey: ['service', service],
    queryFn: () => ServicesService.getStatus(service),
    refetchInterval: SERVICE_STATUS_REFRESH_INTERVAL,
    onSuccess(data: ServiceStatus) {
      setHistory((prevHistory) => {
        const newHistory = { ...prevHistory };
        newHistory[service] = [...(newHistory[service] || []), data];
        return newHistory;
      });
    },
  }));

  const queryResults = useQueries(queryConfigs);

  const state = useMemo(
    () => ({
      services: queryResults.map((qr, i) => ({
        ...(qr.data as ServiceStatus),
        title: queryConfigs[i].queryKey[1],
      })),
      history,
    }),
    [queryResults, history],
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
