import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { describe, expect, it } from 'vitest';

import { theme } from '../../../../styles/theme';
import StatusCard from './StatusCard';
import { StatusCardProps } from './StatusCard.interface';

const mockStatus: StatusCardProps = {
  item: {
    title: 'Server 1',
    success: true,
    time: '2021-04-22T10:20:30Z',
    hostname: 'localhost',
  },
};

describe('StatusCard', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <StatusCard item={mockStatus} />
      </ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with healthy status', () => {
    render(
      <ThemeProvider theme={theme}>
        <StatusCard item={{ ...mockStatus, success: true }} />
      </ThemeProvider>,
    );
    expect(screen.getByText('Healthy')).toBeInTheDocument();
    expect(screen.queryByText('Outage')).not.toBeInTheDocument();
  });

  it('renders with error status', () => {
    render(
      <ThemeProvider theme={theme}>
        <StatusCard item={{ ...mockStatus, success: false }} />
      </ThemeProvider>,
    );
    expect(screen.getByText('Error')).toBeInTheDocument();
    expect(screen.getByText('Outage')).toBeInTheDocument();
  });

  it('toggles selected state on click', () => {
    render(
      <ThemeProvider theme={theme}>
        <StatusCard item={mockStatus} />
      </ThemeProvider>,
    );
    const card = screen.getByTestId('styled-card');
    fireEvent.click(card);
  });
});
