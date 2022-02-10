import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponent from './Pages/RoutesComponent';
import { ThemeProvider } from 'styled-components';
import { theme } from './Styles/Theme';
import Globalstyle from './Styles/Globalstyle';
import GlobalFont from './Styles/GlobalFont';
import Header from './Components/Header';

function App(): JSX.Element {
  console.log(process.env.TEST_NAME);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Globalstyle />
        <GlobalFont />
        <Header />
        <Router>
          <RoutesComponent />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
