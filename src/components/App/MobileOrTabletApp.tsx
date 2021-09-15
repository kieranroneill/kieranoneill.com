import React from 'react';
import styled from 'styled-components';

const WrapComponent = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const MobileOrDesktopApp: React.FC = () => (
  <WrapComponent>Hello human!</WrapComponent>
);

export default MobileOrDesktopApp;
