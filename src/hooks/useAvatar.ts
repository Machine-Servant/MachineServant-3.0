import { useStaticQuery, graphql } from 'gatsby';

import {
  GatsbyImageSharpFluidProps,
  GatsbyImageSharpFixedProps,
} from '../@types/types';

type AvatarProps = {
  [name: string]: AvatarSizes;
};

export enum AvatarNames {
  EVAN_STERN = 'Evan Stern',
}

type AvatarSizes = {
  fluid: GatsbyImageSharpFluidProps;
  sm: GatsbyImageSharpFixedProps;
  md: GatsbyImageSharpFixedProps;
  lg: GatsbyImageSharpFixedProps;
};

export const useAvatar = (): AvatarProps => {
  const { evan } = useStaticQuery<GatsbyTypes.AvatarQueryQuery>(graphql`
    query AvatarQuery {
      evan: file(relativePath: { eq: "evan-avatar.png" }) {
        childImageSharp {
          fluid(quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
          sm: fixed(height: 32, width: 32, quality: 60) {
            ...GatsbyImageSharpFixed_withWebp
          }
          md: fixed(height: 64, width: 64, quality: 60) {
            ...GatsbyImageSharpFixed_withWebp
          }
          lg: fixed(height: 128, width: 128, quality: 60) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  if (!evan) {
    throw Error('GraphQL query returned empty results');
  }

  return {
    [AvatarNames.EVAN_STERN]: evan.childImageSharp!,
  };
};
