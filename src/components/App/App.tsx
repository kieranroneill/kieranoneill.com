import React from 'react';
import { useMediaQuery } from 'react-responsive';

// Components
import DesktopApp from './DesktopApp';
import GlobalStyle from '../GlobalStyle';
import Helmet from '../Helmet';
import MobileOrTabletApp from './MobileOrTabletApp';

// Theme
import { minSizes } from '../../theme';

const App: React.FC = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: minSizes.desktop });

  return (
    <>
      <GlobalStyle />
      <Helmet />
      {isDesktopOrLaptop ? <DesktopApp /> : <MobileOrTabletApp />}
    </>
  );
};

export default App;
