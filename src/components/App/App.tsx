import { i18n } from 'i18next';
import React, { FC } from 'react';
import { I18nextProvider } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

// components
import GlobalStyle from '@site/components/GlobalStyle';
import Helmet from '@site/components/Helmet';
import DesktopApp from './DesktopApp';
import MobileOrTabletApp from './MobileOrTabletApp';

// theme
import { minSizes } from '@site/theme';

// types
import { ILogger } from '@site/types';

interface IProps {
  i18next: i18n;
  logger: ILogger;
}

const App: FC<IProps> = ({ i18next }: IProps) => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: minSizes.desktop });

  return (
    <I18nextProvider i18n={i18next}>
      <GlobalStyle />
      <Helmet />
      {isDesktopOrLaptop ? <DesktopApp /> : <MobileOrTabletApp />}
    </I18nextProvider>
  );
};

export default App;
