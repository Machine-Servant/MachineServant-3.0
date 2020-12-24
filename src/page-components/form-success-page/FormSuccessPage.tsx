import React from 'react';

import { graphql, Link, useStaticQuery } from 'gatsby';

import { Layout } from '../../components/layout';

export const FormSuccessPage: React.FC = () => {
  const {
    formSuccess,
  } = useStaticQuery<GatsbyTypes.FormSuccessPageQueryQuery>(graphql`
    query FormSuccessPageQuery {
      formSuccess: file(relativePath: { eq: "contact-success.jpg" }) {
        childImageSharp {
          fluid(quality: 64) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  if (!formSuccess?.childImageSharp?.fluid) {
    throw Error('GraphQL query returned empty results');
  }

  return (
    <Layout
      image={formSuccess.childImageSharp.fluid}
      imageAlt="Stationary, envelope, tablet and man holding pencil in his hand."
      content={
        <>
          <div className="container z-20 mx-auto">
            <h1 className="text-4xl font-bold text-center text-white uppercase">
              Thank You
            </h1>
            <h2 className="text-2xl font-medium text-center text-white">
              We will respond to your message shortly.
            </h2>
          </div>
          <div className="absolute top-0 left-0 z-10 w-full h-full bg-gray-900 opacity-30" />
        </>
      }
    >
      <div className="container px-4 py-12 mx-auto xl:px-0">
        <h1 className="text-2xl lg:text-3xl">Thank you for your submission.</h1>
        <h2 className="text-xl">You should hear from us soon.</h2>
        <div className="pt-12">
          <Link to="/" className="text-lg underline">
            Go back home
          </Link>
        </div>
      </div>
    </Layout>
  );
};
