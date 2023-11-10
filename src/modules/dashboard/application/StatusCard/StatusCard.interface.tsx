import { ExtendedServiceStatus, ServiceStatus } from '../../domain/types';

export interface StatusCardProps {
  item: ExtendedServiceStatus;
  history?: ServiceStatus[];
}
