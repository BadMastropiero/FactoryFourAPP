import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';

import Navbar from '../components/Navbar/Nabvar';
import ServiceList from '../modules/dashboard/application/ServiceList';
import { ServicesProvider } from '../modules/dashboard/infrastructure/contexts/ServicesContext';
import { theme } from '../styles/theme';
import { StyledContent, StyledGlobal } from './App.styles';

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar title="Status Dashboard" />
      <StyledGlobal />
      <StyledContent>
        <QueryClientProvider client={queryClient}>
          <ServicesProvider>
            <ServiceList />
          </ServicesProvider>
        </QueryClientProvider>
      </StyledContent>
    </ThemeProvider>
  );
}

export default App;
