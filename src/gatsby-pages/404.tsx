import React from 'react';

import { graphql, Link, useStaticQuery } from 'gatsby';

import { Layout } from '../components/layout';

const Error404Page: React.FC = () => {
  const { errorImage } = useStaticQuery(graphql`
    query {
      errorImage: file(relativePath: { eq: "404.jpg" }) {
        childImageSharp {
          fluid(quality: 64) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  if (!errorImage?.childImageSharp?.fluid) {
    throw Error('GraphQL query returned empty results');
  }

  return (
    <Layout
      image={errorImage.childImageSharp.fluid}
      imageAlt="Coffee cup spilling coffee on docuements"
      content={
        <>
          <div className="container z-20 mx-auto">
            <h1 className="text-4xl font-bold text-center text-white uppercase">
              Error 404
            </h1>
            <h2 className="text-2xl font-medium text-center text-white">
              The page you're looking for is removed or relocated.
            </h2>
          </div>
          <div className="absolute top-0 left-0 z-10 w-full h-full bg-gray-900 opacity-30" />
        </>
      }
    >
      <div className="container px-4 py-12 mx-auto xl:px-0">
        <h1 className="text-2xl lg:text-3xl">OOPS!</h1>
        <h2 className="text-xl">
          {' '}
          We're sorry, but the page you're looking for has either been removed
          or relocated.
        </h2>
        <div className="pt-12">
          <Link to="/" className="text-lg underline">
            Go back home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Error404Page;
