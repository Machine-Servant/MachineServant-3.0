import styled from '@emotion/styled';
import tw from 'twin.macro';

export const FullSection = styled.section`
  ${tw`py-12`};
  ${(props: { container?: boolean }) =>
    props.container ? tw`container mx-auto lg:px-4 xl:px-0` : ''};
`;

export const Input = styled.input`
  ${tw`px-4 py-2 mb-4 text-sm border border-2 border-gray-800`};
`;

export const Textarea = styled.textarea`
  ${tw`px-4 py-2 mb-4 text-sm border border-2 border-gray-800`}
`;
