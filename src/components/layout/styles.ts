import styled from '@emotion/styled';
import Image from 'gatsby-image';

export const HeaderImage = styled(Image)`
  height: ${(props: { isLargeImage: boolean }) =>
    props.isLargeImage ? '500px' : '250px'};
`;
