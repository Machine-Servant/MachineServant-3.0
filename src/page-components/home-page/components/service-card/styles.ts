import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Link } from 'gatsby';

import { ColorOptions } from '../../../../@types/types';

export const MainContent = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'highlightColor',
})`
  &:hover {
    ${(props: { highlightColor: ColorOptions }) => {
      switch (props.highlightColor) {
        case 'green':
          return tw`bg-lima-500`;
        case 'gold':
          return tw`bg-copper-500`;
        case 'purple':
          return tw`bg-purple-heart-500`;
        default:
          return tw`bg-lochmara-500`;
      }
    }}
  }

  @media only screen and (min-width: 1024px) {
    width: 24%;
  }
`;

export const TextSection = styled.div`
  ${tw`border border-t-4 border-b-4 border-l-0 border-r-0`};
  ${(props: { highlightColor: ColorOptions }) => {
    switch (props.highlightColor) {
      case 'green':
        return tw`border-lima-500`;
      case 'gold':
        return tw`border-copper-500`;
      case 'purple':
        return tw`border-purple-heart-500`;
      default:
        return tw`border-lochmara-500`;
    }
  }}
`;
