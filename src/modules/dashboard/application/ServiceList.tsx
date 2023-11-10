import { useServices } from '../infrastructure/contexts/ServicesContext';
import { StyledServicesGrid } from './ServiceList.style';
import StatusCard from './StatusCard/StatusCard';

function ServiceList() {
  const { services } = useServices();

  return (
    <>
      <StyledServicesGrid>
        {services.map((s, i) => (s ? <StatusCard key={i} item={s} /> : null))}
      </StyledServicesGrid>
    </>
  );
}

export default ServiceList;
