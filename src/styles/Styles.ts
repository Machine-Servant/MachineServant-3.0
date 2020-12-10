import styled from '@emotion/styled';
import tw from 'twin.macro';

export const FullSection = styled.section`
  ${(props: { container?: boolean }) =>
    props.container ? tw`container mx-auto lg:px-4 xl:px-0` : ''};
  ${(props: { container?: boolean; nopt?: boolean }) =>
    props.nopt ? tw`pt-0` : tw`pt-12`};
  ${(props: { container?: boolean; nopb?: boolean }) =>
    props.nopb ? tw`pb-0` : tw`pb-12`};
`;

export const Input = styled.input`
  ${tw`px-4 py-2 mb-4 text-sm border border-2 border-gray-800`};
`;

export const Textarea = styled.textarea`
  ${tw`px-4 py-2 mb-4 text-sm border border-2 border-gray-800`}
`;
