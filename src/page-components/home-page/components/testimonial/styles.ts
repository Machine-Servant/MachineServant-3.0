import styled from '@emotion/styled';
import tw from 'twin.macro';

export const MainContent = styled.div`
  &:last-child {
    ${tw`mb-0`};
  }
`;

export const ImageWrapper = styled.div`
  ${(props: { imageOrientation: 'left' | 'right' }) =>
    props.imageOrientation === 'left'
      ? tw`mx-auto mb-8 sm:mb-0 sm:mr-8`
      : tw`mx-auto mb-8 sm:mb-0 sm:ml-8`};
  min-width: 212px;
  min-height: 212px;
  max-width: 212px;
  max-height: 212px;
`;
