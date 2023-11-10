import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { describe, expect, it } from 'vitest';

import { theme } from '../../styles/theme';
import Navbar from './Nabvar';

describe('Navbar', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <Navbar title="Test Navbar" />
      </ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the title prop', () => {
    const title = 'Status Dashboard';
    render(
      <ThemeProvider theme={theme}>
        <Navbar title="Status Dashboard" />
      </ThemeProvider>,
    );
    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
