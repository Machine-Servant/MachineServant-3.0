import styled from '@emotion/styled';
import tw from 'twin.macro';

import { Input as BaseInput, Textarea as BaseTextarea } from '../../styles';

export const Input = styled(BaseInput)`
  ${(props: { error?: boolean }) => (props.error ? tw`border-copper-500` : '')};
`;

export const Textarea = styled(BaseTextarea)`
  ${(props: { error?: boolean }) => (props.error ? tw`border-copper-500` : '')};
`;

export const HelpText = styled.span`
  ${tw`mb-4 text-sm text-copper-500`};
`;
