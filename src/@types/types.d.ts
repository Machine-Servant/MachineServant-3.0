import { FixedObject, FluidObject } from 'gatsby-image';

declare type ImageSharpFluidProps = {
  childImageSharp: {
    fluid: FluidObject;
  };
};

declare type ImageSharpFixedProps = {
  childImageSharp: {
    fixed: FixedObject;
  };
};

declare type ColorOptions = 'green' | 'blue' | 'gold' | 'purple';

declare type TagsGroupProps = {
  fieldValue: string;
  totalCount: number;
};

declare type GatsbyImageSharpFixedProps = GatsbyTypes.Maybe<
  Pick<
    GatsbyTypes.ImageSharpFixed,
    'base64' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'width' | 'height'
  >
>;

declare type GatsbyImageSharpFluidProps = GatsbyTypes.Maybe<
  Pick<
    GatsbyTypes.ImageSharpFluid,
    | 'base64'
    | 'aspectRatio'
    | 'src'
    | 'srcSet'
    | 'srcWebp'
    | 'srcSetWebp'
    | 'sizes'
  >
>;
