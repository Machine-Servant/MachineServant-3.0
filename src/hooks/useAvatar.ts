import { useStaticQuery, graphql } from 'gatsby';
import { FixedObject, FluidObject } from 'gatsby-image';

type AvatarProps = {
  [name: string]: AvatarSizes;
};

export enum AvatarNames {
  EVAN_STERN = 'Evan Stern',
}

type AvatarSizes = {
  fluid: FluidObject;
  sm: FixedObject;
  md: FixedObject;
  lg: FixedObject;
};

type AvatarImageSharpProps = {
  childImageSharp: AvatarSizes;
};

type AvatarQueryProps = {
  evan: AvatarImageSharpProps;
};

export const useAvatar = (): AvatarProps => {
  const { evan } = useStaticQuery<AvatarQueryProps>(graphql`
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

  return {
    [AvatarNames.EVAN_STERN]: evan.childImageSharp,
  };
};
