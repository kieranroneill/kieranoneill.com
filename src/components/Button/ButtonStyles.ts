import styled, { css, keyframes } from 'styled-components';

// Theme.
import { palette, typography } from '../../theme';

const dashAnimation = keyframes`
  0%,
  24% { background-color: ${palette.greyScale.white}; }

  25%,
  49% { background-color: ${palette.brand.green600}; }

  50%,
  74% { background-color: ${palette.greyScale.white}; }

  75%,
  100% { background-color: ${palette.brand.green600}; }
`;
export const ButtonHoverStyles = css`
  span {
    &:first-child {
      width: calc(100% + 76px);
      transition: all 0.4s steps(8);

      &:after {
        animation: ${dashAnimation} 0.3s 0s 1 forwards;
      }
    }

    &:nth-child(2) {
      width: calc(100% + 46px);
      transition: all 0.375s steps(8);

      &:after {
        animation: ${dashAnimation} 0.3s 0.06s 1 reverse backwards;
      }
    }

    &:nth-child(3) {
      width: calc(100% + 56px);
      transition: all 0.35s steps(8);

      &:after {
        animation: ${dashAnimation} 0.3s 0.05s 1 forwards;
      }
    }

    &:nth-child(4) {
      width: calc(100% + 16px);
      transition: all 0.3s steps(8);

      &:after {
        animation: ${dashAnimation} 0.3s 0s 1 reverse backwards;
      }
    }

    &:nth-child(5) {
      width: calc(100% + 26px);
      transition: all 0.325s steps(8);

      &:after {
        animation: ${dashAnimation} 0.3s 0.07s 1 forwards;
      }
    }
  }
`;
export const ButtonOverlay = styled.div`
  bottom: 0;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
`;
export const ButtonStyles = css`
  align-items: center;
  background-color: ${palette.brand.green500};
  border: none;
  color: ${palette.greyScale.white};
  cursor: pointer;
  display: inline-flex;
  flex-direction: row;
  font-family: ${typography.primaryFontFamily};
  font-size: 1rem;
  justify-content: center;
  min-width: 6rem;
  padding: 1rem 2rem;
  position: relative;
  text-transform: uppercase;
  z-index: 1;

  &:after {
    background: ${palette.brand.green600};
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 0.35rem;
    z-index: -2;
    content: '';
  }
`;
export const Square = styled.span`
  background-color: ${palette.brand.green600};
  position: relative;
  display: block;
  left: -15px;
  height: 10px;
  width: 0;
  content: '';

  &:after {
    background-color: ${palette.greyScale.white};
    content: '';
    display: block;
    height: 10px;
    position: absolute;
    right: -10px;
    width: 10px;
  }

  &:first-child {
    left: -75px;
    transition: all 0.3s steps(8);
  }

  :nth-child(odd):after {
    background-color: ${palette.brand.green600};
  }

  &:nth-child(2) {
    left: -45px;
    transition: all 0.325s steps(8);
  }

  &:nth-child(3) {
    left: -55px;
    transition: all 0.35s steps(8);
  }

  &:nth-child(4) {
    transition: all 0.4s steps(8);
  }

  :nth-child(5) {
    left: -25px;
    transition: all 0.375s steps(8);
  }
`;
