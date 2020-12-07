import React from 'react';
import { ImageSharpFluidProps } from '../../types';

import { Layout } from '../../components/layout';
import { SEO } from '../../components/seo';
import { graphql, useStaticQuery } from 'gatsby';

type HomePageQueryProps = {
  headerImage: ImageSharpFluidProps;
};

export const HomePage: React.FC = () => {
  const { headerImage } = useStaticQuery<HomePageQueryProps>(graphql`
    query HomePageQuery {
      headerImage: file(relativePath: { eq: "home-page-header.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout
      image={headerImage.childImageSharp.fluid}
      imageAlt="MachineServant"
      isLargeImage
      content={
        <div className="container px-4 mx-auto xl:px-0">
          <h3 className="text-lg">At MachineServant we</h3>
          <h1 className="text-3xl font-bold uppercase">
            Design + Build + Manage
          </h1>
          <h3 className="text-lg">
            websites, web applications, software, and more.
          </h3>
          <div className="hidden sm:block">
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      }
    >
      <SEO title="home" />
      Hello World
    </Layout>
  );
};
