import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { Layout } from '../../components/layout';
import { SEO } from '../../components/seo';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';
import { ImageSharpFluidProps } from '../../types';
import { ServiceCard } from './components/service-card';

type HomePageQueryProps = {
  headerImage: ImageSharpFluidProps;
  websiteDesign: ImageSharpFluidProps;
  coding: ImageSharpFluidProps;
  webApplication: ImageSharpFluidProps;
  projectManagement: ImageSharpFluidProps;
};

export const HomePage: React.FC = () => {
  const {
    headerImage,
    websiteDesign,
    coding,
    webApplication,
    projectManagement,
  } = useStaticQuery<HomePageQueryProps>(graphql`
    query HomePageQuery {
      headerImage: file(relativePath: { eq: "home-page-header.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      websiteDesign: file(relativePath: { eq: "website-design.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      coding: file(relativePath: { eq: "coding.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      webApplication: file(relativePath: { eq: "web-application.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      projectManagement: file(relativePath: { eq: "project-management.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const { title } = useSiteMetadata();

  return (
    <Layout
      image={headerImage.childImageSharp.fluid}
      imageAlt="MachineServant"
      isLargeImage
      content={
        <div className="container px-4 mx-auto xl:px-0">
          <span className="block text-lg">At {title} we</span>
          <span className="block text-3xl font-bold uppercase">
            Design + Build + Manage
          </span>
          <span className="block text-lg">
            websites, web applications, software, and more.
          </span>
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
      <div className="py-24 bg-gray-100">
        <div className="flex items-center justify-center w-full mb-4">
          <StaticImage
            className="inline-block"
            height={70}
            width={70}
            src="../../../static/images/logo-small.png"
            alt={title}
            transformOptions={{}}
            blurredOptions={{}}
          />
          <span className="text-3xl font-bold text-black uppercase sm:text-5xl">
            {title}
          </span>
        </div>
        <div className="mx-auto sm:flex sm:items-center sm:justify-center sm:max-w-4xl">
          <div className="sm:mr-8 sm:w-96">
            <div className="mb-4 text-2xl text-center text-black sm:mb-0 sm:text-right sm:text-4xl">
              We're The Experts
            </div>
          </div>
          <div className="px-4 text-center sm:text-left sm:px-0">
            <p className="mb-4 sm:mb-0">
              Your professional source for online inovation.
            </p>
            <p>
              {title} is a web design and development shop that can take your
              project from start to finish and produce high quality,
              professional results!
            </p>
          </div>
        </div>
      </div>
      <div className="container py-12 mx-auto">
        <div className="text-center">
          <span className="text-4xl text-black uppercase">Services</span>
        </div>
        <div className="mt-12 lg:flex lg:justify-between">
          <ServiceCard
            title="Website Design"
            image={websiteDesign.childImageSharp.fluid}
          >
            Functional and beautiful outcomes with hierarchy, balance, space,
            alignments and contrast creating the perfect eye flow.
          </ServiceCard>
          <ServiceCard title="Coding" image={coding.childImageSharp.fluid}>
            Top notch knowledge and expertise on all your coding needs. We're
            the experts. We know our stuff.
          </ServiceCard>
          <ServiceCard
            title="Web + Software Development"
            image={webApplication.childImageSharp.fluid}
          >
            If you have a great idea for a product, we have top-notch solutions!
            We'll handle the heavy lifting and let you keep coming up with
            amazing ideas.
          </ServiceCard>
          <ServiceCard
            title="Project Management"
            image={projectManagement.childImageSharp.fluid}
          >
            We will manage your project one on one, every step of the way,
            bringing your project to life in your timeframe.
          </ServiceCard>
        </div>
      </div>
    </Layout>
  );
};
