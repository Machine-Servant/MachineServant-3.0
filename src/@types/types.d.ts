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
