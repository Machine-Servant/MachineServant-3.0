import styled from '@emotion/styled';
import tw from 'twin.macro';

import { ColorOptions } from '../../../../@types/types';

export const ColorBorder = styled.div`
  ${tw`border border-t-0 border-b-0`};
  ${(props: { orientation: 'left' | 'right' }) => {
    if (props.orientation === 'left') {
      return tw`border-l-0 border-r-4`;
    } else {
      return tw`border-l-4 border-r-0`;
    }
  }}
  ${(props: {
    highlightColor: ColorOptions;
    orientation: 'left' | 'right';
  }) => {
    switch (props.highlightColor) {
      case 'green': {
        return tw`border-lima-500`;
      }
      case 'blue': {
        return tw`border-lochmara-500`;
      }
      case 'gold': {
        return tw`border-copper-500`;
      }
      default: {
        return tw`border-purple-heart-500`;
      }
    }
  }}
`;
