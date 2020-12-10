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
