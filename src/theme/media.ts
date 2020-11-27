import { css, FlattenSimpleInterpolation } from 'styled-components';

export const minSizes: Record<'desktop' | 'tablet', number> = {
  desktop: 1280,
  tablet: 768,
};

const media: Record<
  string,
  (args: TemplateStringsArray) => FlattenSimpleInterpolation
> = {
  mobileOnly: (args: TemplateStringsArray) => css`
    @media (max-width: 768px) {
      ${css(args)};
    }
  `,
  tabletAndUp: (args: TemplateStringsArray) => css`
    @media (min-width: 769px) {
      ${css(args)};
    }
  `,
  desktopAndUp: (args: TemplateStringsArray) => css`
    @media (min-width: 1280px) {
      ${css(args)};
    }
  `,
};

export default media;
