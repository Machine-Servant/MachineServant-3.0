import styled from '@emotion/styled';
import Image from 'gatsby-image';

export const HeaderImage = styled(Image)`
  height: 200px;

  @media only screen and (min-width: 640px) {
    height: ${(props: { isLargeImage: boolean }) =>
      props.isLargeImage ? '500px' : '300px'};
  }
`;
