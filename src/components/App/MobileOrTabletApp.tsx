import { AnimatorGeneralProvider } from '@arwes/animation';
import {
  ArwesThemeProvider,
  Button,
  Card,
  FramePentagon,
  StylesBaseline,
  Text,
} from '@arwes/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

// constants
import {
  CV_FILENAME,
  DOCS_PATH,
  GITHUB_LINK,
  LINKEDIN_LINK,
  X_LINK,
} from '@site/constants';

// theme
import { minSizes, palette, typography } from '@site/theme';

// utils
import { downloadFile } from '@site/utils';

const ButtonContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin: 0 0 1rem;
`;
const Container = styled.div<{ isSmallScreen?: boolean }>`
  ${({ isSmallScreen = false }) => isSmallScreen && 'height: 100%;'}
`;
const Footer = styled.div`
  display: inline-flex;
  flex-direction: column;
`;
const Header = styled(Text)`
  color: ${palette.brand.primary.main};
  text-transform: none;
`;
const StyledButton = styled(Button)`
  margin: 0 0 0.75rem;
  min-width: 12rem;
`;
const Paragraph = styled(Text)`
  margin: 0 0 0.75rem;
`;
const WrapComponent = styled.div`
  align-items: center;
  background-color: ${palette.greyScale.darkerGrey};
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
`;

const MobileOrDesktopApp: React.FC = () => {
  const { t } = useTranslation();
  const isSmallScreen: boolean = useMediaQuery({ maxWidth: minSizes.tablet });
  const handleDownloadCvClick = () => {
    downloadFile(DOCS_PATH, `${CV_FILENAME}.pdf`);
  };
  const handleLinkClick = (link: string) => () => {
    window.open(link, '_blank');
  };

  return (
    <WrapComponent>
      <ArwesThemeProvider
        themeSettings={{
          palette: {
            primary: palette.brand.primary,
            secondary: palette.brand.secondary,
          },
        }}
      >
        <StylesBaseline
          styles={{
            body: {
              color: palette.brand.primary.main,
              fontFamily: typography.secondaryFontFamily,
            },
          }}
        />
        <Container isSmallScreen={isSmallScreen}>
          <AnimatorGeneralProvider
            animator={{
              duration: {
                enter: 400,
                exit: 400,
                stagger: 80,
              },
            }}
          >
            <Card
              animator={{ activate: true }}
              options={
                <Footer>
                  <ButtonContainer>
                    <StyledButton
                      active={true}
                      FrameComponent={FramePentagon}
                      onClick={handleDownloadCvClick}
                    >
                      <Text>{t('buttons.downloadCv')}</Text>
                    </StyledButton>

                    <StyledButton
                      active={true}
                      FrameComponent={FramePentagon}
                      onClick={handleLinkClick(GITHUB_LINK)}
                    >
                      <Text>{t('buttons.github')}</Text>
                    </StyledButton>

                    <StyledButton
                      active={true}
                      FrameComponent={FramePentagon}
                      onClick={handleLinkClick(LINKEDIN_LINK)}
                    >
                      <Text>{t('buttons.linkedin')}</Text>
                    </StyledButton>

                    <StyledButton
                      active={true}
                      FrameComponent={FramePentagon}
                      onClick={handleLinkClick(X_LINK)}
                    >
                      <Text>{t('buttons.x')}</Text>
                    </StyledButton>
                  </ButtonContainer>

                  <Text>{`Version ${__VERSION__}`}</Text>
                </Footer>
              }
              style={{
                color: palette.brand.primary.main,
                maxWidth: minSizes.tablet,
                minWidth: minSizes.mobile,
                ...(isSmallScreen && {
                  height: '100%',
                }),
              }}
              title={<Header>{t('headings.welcome')}</Header>}
            >
              <Paragraph>{t('captions.welcome1')}</Paragraph>

              <Paragraph>{t('captions.welcome2')}</Paragraph>
            </Card>
          </AnimatorGeneralProvider>
        </Container>
      </ArwesThemeProvider>
    </WrapComponent>
  );
};

export default MobileOrDesktopApp;
