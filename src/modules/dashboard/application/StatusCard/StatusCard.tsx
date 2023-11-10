import { useState } from 'react';

import { StatusCardProps } from './StatusCard.interface';
import {
  StyledCard,
  StyledErrorMessage,
  StyledHostname,
  StyledStatus,
  StyledTime,
  StyledTitle,
} from './StatusCard.style';

export default function StatusCard({ item }: StatusCardProps) {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <StyledCard
      onClick={() => {
        setSelected((p) => !p);
      }}
      selected={selected}
      data-testid="styled-card"
    >
      <StyledTitle>{item?.title}</StyledTitle>
      <StyledStatus success={item?.success}>
        {item?.success ? 'Healthy' : 'Error'}
      </StyledStatus>
      <StyledTime>
        {item?.time ? new Date(item.time).toLocaleTimeString() : undefined}
      </StyledTime>
      {!item?.success && <StyledErrorMessage> Outage </StyledErrorMessage>}
      <StyledHostname>{item?.hostname}</StyledHostname>
    </StyledCard>
  );
}
