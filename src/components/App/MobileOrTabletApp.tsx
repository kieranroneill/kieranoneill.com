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
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

// constants
import { Files, Links, Paths, Versions } from '../../constants';

// theme
import { minSizes, palette, typography } from '../../theme';

// utils
import { downloadFile } from '../../utils';

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
  const isSmallScreen: boolean = useMediaQuery({ maxWidth: minSizes.tablet });
  const handleDownloadCvClick = () => {
    downloadFile(Paths.DOCS, Files.CV.replace('${version}', Versions.CV));
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
                      <Text>Download CV</Text>
                    </StyledButton>
                    <StyledButton
                      active={true}
                      FrameComponent={FramePentagon}
                      onClick={handleLinkClick(Links.GITHUB)}
                    >
                      <Text>GitHub</Text>
                    </StyledButton>
                    <StyledButton
                      active={true}
                      FrameComponent={FramePentagon}
                      onClick={handleLinkClick(Links.LINKEDIN)}
                    >
                      <Text>LinkedIn</Text>
                    </StyledButton>
                    <StyledButton
                      active={true}
                      FrameComponent={FramePentagon}
                      onClick={handleLinkClick(Links.X)}
                    >
                      <Text>Twitter</Text>
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
              title={<Header>Welcome to kieranoneill.com</Header>}
            >
              <Paragraph>
                This is te mobile version of my website where you will find my
                CV and social links.
              </Paragraph>
              <Paragraph>
                Be sure to check out my website on a desktop or laptop, as you
                may find some tasty treats!
              </Paragraph>
            </Card>
          </AnimatorGeneralProvider>
        </Container>
      </ArwesThemeProvider>
    </WrapComponent>
  );
};

export default MobileOrDesktopApp;
