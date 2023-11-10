import { useRef, useState } from 'react';

import useLockBodyScroll from '../../../../hooks/useLockBodyScroll';
import useOnClickOutside from '../../../../hooks/useOnClickOutside';
import { StatusCardProps } from './StatusCard.interface';
import {
  StyledCard,
  StyledErrorMessage,
  StyledHistoryItem,
  StyledHistoryList,
  StyledHostname,
  StyledStatus,
  StyledTime,
  StyledTitle,
} from './StatusCard.style';

export default function StatusCard({ item, history }: StatusCardProps) {
  const [selected, setSelected] = useState<boolean>(false);
  const ref = useRef(null);
  useOnClickOutside(ref, (e) => {
    setSelected(false);
    e.stopPropagation();
    // e.stopImmediatePropagation();
  });
  useLockBodyScroll(selected, [selected]);

  return (
    <>
      {selected && <br />}
      <StyledCard
        data-testid="styled-card"
        onClick={(e) => {
          setSelected(true);
          e.stopPropagation();
        }}
        selected={selected}
        ref={ref}
      >
        {!selected && (
          <>
            <StyledTitle>{item?.title}</StyledTitle>
            <StyledStatus success={item?.success}>
              {item?.success ? 'Healthy' : 'Error'}
            </StyledStatus>
            <StyledTime>
              {item?.time ? new Date(item.time).toLocaleTimeString() : undefined}
            </StyledTime>
            {!item?.success && (
              <StyledErrorMessage>
                <p>Outage</p>
                <p>{item.message}</p>
              </StyledErrorMessage>
            )}
            <StyledHostname>{item?.hostname}</StyledHostname>
          </>
        )}
        {selected && (
          <>
            <StyledTitle>History</StyledTitle>
            <StyledHistoryList>
              {history?.map((item, i) => (
                <StyledHistoryItem key={i}>
                  <StyledStatus success={item?.success}>
                    {item?.success ? 'Healthy' : 'Error'}
                  </StyledStatus>
                  <b>Time:</b>
                  <StyledTime>
                    {item?.time ? new Date(item.time).toLocaleTimeString() : undefined}
                  </StyledTime>
                  {!item?.success && (
                    <>
                      <b>Details:</b>
                      <StyledErrorMessage>
                        <p>Outage {item.message}</p>
                      </StyledErrorMessage>
                    </>
                  )}
                  {item?.hostname && (
                    <>
                      <b>Host:</b>
                      <StyledHostname>{item?.hostname}</StyledHostname>
                    </>
                  )}
                </StyledHistoryItem>
              ))}
            </StyledHistoryList>
          </>
        )}
      </StyledCard>
    </>
  );
}
