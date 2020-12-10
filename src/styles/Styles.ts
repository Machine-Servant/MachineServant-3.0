import styled from '@emotion/styled';
import tw from 'twin.macro';

export const FullSection = styled.section`
  ${tw`py-12`};
  ${(props: { container?: boolean }) =>
    props.container ? tw`container mx-auto lg:px-4 xl:px-0` : ''};
`;
