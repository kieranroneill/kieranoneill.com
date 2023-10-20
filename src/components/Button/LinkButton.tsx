import React from 'react';
import styled from 'styled-components';

// components
import {
  ButtonHoverStyles,
  ButtonOverlay,
  ButtonStyles,
  Square,
} from './ButtonStyles';

// Themes.
import { palette } from '../../theme';

// utils
import { getRandomString } from '../../utils';

const buttonOverlayClassName: string = getRandomString(5);

const StyledLink = styled.a`
  ${ButtonStyles}

  &:hover {
    color: ${palette.greyScale.white};

    .${buttonOverlayClassName} {
      ${ButtonHoverStyles}
    }
  }
`;

export const LinkButton: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement>
> = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <StyledLink {...props}>
    <ButtonOverlay className={buttonOverlayClassName}>
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </ButtonOverlay>
    {props.children}
  </StyledLink>
);

export default LinkButton;
