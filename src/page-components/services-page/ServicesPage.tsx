import React from 'react';

import { Link, graphql, useStaticQuery } from 'gatsby';

import { Layout } from '../../components/layout';
import { ImageSharpFluidProps } from '../../@types/types';
import { FullSection } from '../../styles';
import { ServiceCard } from './components/service-card';
import { SEO } from '../../components/seo';

type ServicesPageProps = {
  servicesPage: ImageSharpFluidProps;
  consulting: ImageSharpFluidProps;
  development: ImageSharpFluidProps;
  management: ImageSharpFluidProps;
  design: ImageSharpFluidProps;
  webApp: ImageSharpFluidProps;
};

export const ServicesPage: React.FC = () => {
  const {
    servicesPage,
    consulting,
    development,
    management,
    design,
    webApp,
  } = useStaticQuery<ServicesPageProps>(graphql`
    query ServicesPageQuery {
      servicesPage: file(relativePath: { eq: "services-page.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      consulting: file(relativePath: { eq: "consulting.jpg" }) {
        childImageSharp {
          fluid(quality: 64) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      development: file(relativePath: { eq: "development.jpg" }) {
        childImageSharp {
          fluid(quality: 64) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      management: file(relativePath: { eq: "management-and-maintenance.jpg" }) {
        childImageSharp {
          fluid(quality: 64) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      design: file(relativePath: { eq: "website-design.jpg" }) {
        childImageSharp {
          fluid(quality: 64) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      webApp: file(relativePath: { eq: "web-app-development.jpg" }) {
        childImageSharp {
          fluid(quality: 64) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Layout
      image={servicesPage.childImageSharp.fluid}
      imageAlt="Laptop keyboard computer"
      darken
      content={
        <div className="container flex mx-auto">
          <div className="w-full text-center text-white">
            <h1 className="text-4xl font-bold uppercase">Services</h1>
            <h2 className="text-xl">Your Vision. Our Solutions</h2>
          </div>
        </div>
      }
    >
      <SEO title="Services" description="Your Vision. Our Solutions." />
      <FullSection className="font-medium text-center" container>
        <h1 className="mb-4 text-4xl uppercase">What we offer</h1>
        <p className="max-w-xl mx-auto leading-relaxed">
          We design, build, and manage your web site or web application. Our
          team of experts will work with you one on one to bring your vision to
          reality.
        </p>
      </FullSection>
      <FullSection nopt container>
        <ServiceCard
          title="web application development"
          image={webApp.childImageSharp.fluid}
          imageAlt="Two programmers at work at a table"
          orientation="left"
          highlightColor="blue"
        >
          Got an idea for the next big thing? We can get there! All of our
          services come together to bring you the most experienced team
          dedicated to turning your big idea into the best product on the
          market.
        </ServiceCard>
        <ServiceCard
          title="design"
          image={design.childImageSharp.fluid}
          imageAlt="Notebook beside an iphone on a table"
          orientation="right"
          highlightColor="purple"
        >
          Developing a strong user interface is essential if you're looking to
          attract interest and attention with your target audience. At
          MachineServant, our design services can play an intergal role in
          successfully promoting you and your business.
        </ServiceCard>
        <ServiceCard
          title="website development"
          image={development.childImageSharp.fluid}
          imageAlt="Woman looking at her laptop and phone"
          orientation="left"
          highlightColor="gold"
        >
          Let our team of expert developers build your project. We can take over
          an existing codebase, or build you something from scratch. We will
          work with you one on one to bring your dream to reality.
        </ServiceCard>
        <ServiceCard
          title="management + maintenance"
          image={management.childImageSharp.fluid}
          imageAlt="People with coffee at a meeting"
          orientation="right"
          highlightColor="green"
        >
          We have a strong commitment to Project Management. We’re always
          working to ensure our clients’ needs get the attention they deserve.
          With our Maintenance services and experience, we keep your project up
          to date and looking great!
        </ServiceCard>
        <ServiceCard
          title="consulting"
          image={consulting.childImageSharp.fluid}
          imageAlt="Two people at a computers with shared paper"
          orientation="left"
          highlightColor="blue"
        >
          We provide you and your company with consulting and analysis based on
          the latest technologies to help you make the best choices to achieve
          your vision. Our experts will help you improve your brand, increase
          your audience, and bring your project to life.
        </ServiceCard>
        <div className="text-sm text-center">
          <p className="mb-8">
            Interested in boosting your site with a bit of creative development
            magic? Get in touch with us today!
          </p>
          <Link to="/contact" className="px-8 py-4 text-white bg-lochmara-500">
            Get in touch
          </Link>
        </div>
      </FullSection>
    </Layout>
  );
};
