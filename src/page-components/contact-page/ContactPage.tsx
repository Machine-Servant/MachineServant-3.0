import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { ImageSharpFluidProps } from '../../@types/types';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';
import { Layout } from '../../components/layout';
import { ContactForm } from '../../components/contact-form';
import { FullSection } from '../../styles';
import { SEO } from '../../components/seo';
import { CalendlyEmbed } from '../../components/calendly-embed';

type ContactPageQueryProps = {
  contactImage: ImageSharpFluidProps;
};

export const ContactPage: React.FC = () => {
  const { contactImage } = useStaticQuery<ContactPageQueryProps>(graphql`
    query ContactPageQuery {
      contactImage: file(relativePath: { eq: "contact.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const { title, contact } = useSiteMetadata();

  return (
    <Layout
      image={contactImage.childImageSharp.fluid}
      imageAlt="Cell phone in hand"
      content={
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center uppercase">
            Contact Us
          </h1>
        </div>
      }
    >
      <SEO
        title="Contact Us"
        description="Want a great website or application? Call, email or send us a message!"
      />
      <FullSection className="bg-gray-100">
        <div className="flex flex-col items-start max-w-4xl mx-auto lg:flex-row">
          <div className="w-auto lg:w-1/2">
            <div className="flex items-center justify-center mb-8">
              <StaticImage
                className="inline-block"
                height={60}
                width={60}
                src="../../../static/images/logo-small.png"
                alt={title}
                transformOptions={{}}
                blurredOptions={{}}
              />
              <span className="text-2xl font-bold text-black uppercase md:text-4xl">
                {title}
              </span>
            </div>
            <div className="flex flex-col justify-between px-12">
              <div>
                <span className="text-xl font-medium uppercase lg:text-2xl">
                  Located in Akron, Ohio
                </span>
                <p className="text-lg">
                  We love northeast Ohio, but our abilities know no bounds! We
                  can work with you remotely any time, any place.
                </p>
              </div>
              <div className="mt-12">
                <h5>Akron, Ohio</h5>
                <h5>
                  <a href="tel:3302853015" rel="noreferrer" target="_blank">
                    (330)-285-3015
                  </a>
                </h5>
                <h5>
                  <a
                    className="underline"
                    href={`mailto:${contact}`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {contact}
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div className="w-full pr-6 mt-8 lg:w-1/2 lg:pr-0 lg:mt-0">
            <ContactForm />
          </div>
        </div>
      </FullSection>
      <FullSection>
        <CalendlyEmbed account="machineservant" eventName="30min" />
      </FullSection>
    </Layout>
  );
};
