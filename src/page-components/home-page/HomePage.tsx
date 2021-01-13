import React from 'react';

import {
  faPhone,
  faPiggyBank,
  faClock,
  faCog,
  faClipboardCheck,
} from '@fortawesome/free-solid-svg-icons';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { StaticImage } from 'gatsby-plugin-image';

import { Layout } from '../../components/layout';
import { SEO } from '../../components/seo';
import { ContactForm } from '../../components/contact-form';
import { FullSection } from '../../styles';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';

import { ServiceCard } from './components/service-card';
import { FeatureCard } from './components/feature-card';
import { Testimonial } from './components/testimonial';
import { SectionHeader } from './styles';

export const HomePage: React.FC = () => {
  const {
    headerImage,
    features,
    websiteDesign,
    coding,
    webApplication,
    projectManagement,
    engeloRumoraProfile,
    contactUs,
  } = useStaticQuery<GatsbyTypes.HomePageQueryQuery>(graphql`
    query HomePageQuery {
      headerImage: file(relativePath: { eq: "home-page-header.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      features: file(relativePath: { eq: "features.jpg" }) {
        childImageSharp {
          fluid(quality: 64) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      websiteDesign: file(relativePath: { eq: "website-design.jpg" }) {
        childImageSharp {
          fluid(quality: 64) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      coding: file(relativePath: { eq: "coding.jpg" }) {
        childImageSharp {
          fluid(quality: 64) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      webApplication: file(relativePath: { eq: "web-application.jpg" }) {
        childImageSharp {
          fluid(quality: 64) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      projectManagement: file(relativePath: { eq: "project-management.jpg" }) {
        childImageSharp {
          fluid(quality: 64) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      engeloRumoraProfile: file(
        relativePath: { eq: "engelorumora-profile.jpeg" }
      ) {
        childImageSharp {
          fluid(quality: 64) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      contactUs: file(relativePath: { eq: "contact-us.jpg" }) {
        childImageSharp {
          fluid(quality: 64) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const { title } = useSiteMetadata();

  if (
    !headerImage?.childImageSharp?.fluid ||
    !features?.childImageSharp?.fluid ||
    !websiteDesign?.childImageSharp?.fluid ||
    !coding?.childImageSharp?.fluid ||
    !webApplication?.childImageSharp?.fluid ||
    !projectManagement?.childImageSharp?.fluid ||
    !engeloRumoraProfile?.childImageSharp?.fluid ||
    !contactUs?.childImageSharp?.fluid
  ) {
    throw Error('GraphQL query returned empty results');
  }

  return (
    <Layout
      image={headerImage.childImageSharp.fluid}
      imageAlt="MachineServant"
      isLargeImage
      darken
      content={
        <div className="container px-4 mx-auto xl:px-0">
          <div className="inline-block p-8 text-white rounded-lg rounded-tl-none rounded-br-none shadow-2xl bg-lochmara-500 bg-opacity-80">
            <span className="block text-lg font-medium">At {title} we</span>
            <span className="block text-3xl font-bold uppercase">
              Design + Build + Manage
            </span>
            <span className="block text-lg font-medium">
              websites, web applications, software, and more.
            </span>
            <div className="mt-8 text-center">
              <Link
                to="/services"
                className="px-4 py-2 text-xl font-medium text-white underline"
              >
                Check out our services!
              </Link>
            </div>
          </div>
          <div className="hidden sm:block">
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      }
    >
      <SEO title="Home" />
      <div className="py-8 bg-gray-100 lg:py-24">
        <div className="flex items-center justify-center w-full mb-4">
          <div className="hidden lg:inline-block">
            <StaticImage
              className="inline-block"
              layout="fixed"
              height={70}
              width={70}
              src="../../../static/images/logo-small.png"
              alt={title || 'MachineServant'}
              transformOptions={{}}
              blurredOptions={{}}
            />
          </div>
          <span className="text-xl font-bold text-black uppercase lg:text-3xl sm:text-5xl">
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
              Your professional source for online innovation.
            </p>
            <p>
              {title} is a web and software development shop that builds
              solutions for your business. We work with you from the initial
              stages of idea conception to execution. Your vision becomes our
              vision and we help you to implement your ideas into working
              solutions that will take your business to the next level.
            </p>
          </div>
        </div>
        <p className="mt-4 text-center">
          <Link className="text-lg underline" to="/contact">
            Tell us about your project
          </Link>
        </p>
      </div>
      <FullSection container>
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <SectionHeader>Services</SectionHeader>
          </div>
          <div className="mt-12 lg:flex lg:justify-between">
            <ServiceCard
              title="Website Design"
              image={websiteDesign.childImageSharp.fluid}
              highlightColor="blue"
            >
              Functional and beautiful outcomes with hierarchy, balance, space,
              alignments and contrast creating the perfect eye flow.
            </ServiceCard>
            <ServiceCard
              title="Web Application Development"
              image={webApplication.childImageSharp.fluid}
              highlightColor="gold"
            >
              If you have a great idea for a product, we have top-notch
              solutions! We'll handle the heavy lifting and let you keep coming
              up with amazing ideas.
            </ServiceCard>
            <ServiceCard
              title="Coding"
              image={coding.childImageSharp.fluid}
              highlightColor="purple"
            >
              Top notch knowledge and expertise on all your coding needs. We're
              the experts. We know our stuff.
            </ServiceCard>
            <ServiceCard
              title="Project Management"
              image={projectManagement.childImageSharp.fluid}
              highlightColor="green"
            >
              We will manage your project one on one, every step of the way,
              bringing your project to life in your timeframe.
            </ServiceCard>
          </div>
        </div>
      </FullSection>
      <div className="relative">
        <Image
          className="h-60 lg:h-auto"
          fluid={features.childImageSharp.fluid}
          alt="Programmers working"
        />
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-gray-900 opacity-30" />
        <div className="absolute top-0 left-0 z-20 flex flex-col justify-center w-full h-full text-center text-white">
          <span className="inline-block text-4xl font-bold uppercase">
            features
          </span>
          <span className="inline-block text-lg">Going Above and Beyond</span>
        </div>
      </div>
      <FullSection container className="">
        <div className="justify-between mx-auto lg:max-w-5xl lg:flex">
          <FeatureCard title="Free Consultation" icon={faPhone}>
            No robots here! From consultation to design, building, publishing,
            and maintenance - we only offer one on one human interaction every
            step of the way.
          </FeatureCard>
          <FeatureCard title="Cost Effective" icon={faPiggyBank}>
            After all, we work for small and midsize businesses. Our prices are
            competitive yet affordable. To find out more about our
            cost-effective rates, scroll down to schedule a free consultation
            with us.
          </FeatureCard>
          <FeatureCard title="Fast Results" icon={faClock}>
            Need to start now? We're fast, quick, and snappy! However you put
            it, you'll get your website or web application in your timeframe
            with the best quality results.
          </FeatureCard>
          <FeatureCard title="In Depth Knowledge" icon={faCog}>
            With over 15 years of experience in software and website/web
            application development, we will go the distance in every aspect.
          </FeatureCard>
          <FeatureCard title="Satisfaction Guaranteed" icon={faClipboardCheck}>
            If you want changes, you'll get changes. As many as you need until
            you're happy with the results. We'll create solutions based on your
            consumer needs and company goals.
          </FeatureCard>
        </div>
      </FullSection>
      <FullSection className="bg-gray-100">
        <Testimonial
          image={engeloRumoraProfile.childImageSharp.fluid}
          imageOrientation="left"
          name="Engelo Rumora"
          company="OhioCashFlow"
          link="https://www.ohiocashflow.com"
        >
          "After countless individuals and companies along with hundreds of
          thousands of dollars in losses, we have finally found a company that
          we trust. Machine Servant is affordable, efficient and they definitely
          know their stuff. Led by Evan who is not only a true professional but
          through our working relationship has also become a friend. I highly
          recommend taking them on for any project that you have in mind."
        </Testimonial>
      </FullSection>
      <FullSection container>
        <div className="px-4 mx-auto lg:max-w-5xl lg:px-0">
          <div className="mb-12 text-center">
            <SectionHeader>Contact Us</SectionHeader>
          </div>
          <div className="flex flex-col justify-between sm:flex-row">
            <Image
              className="w-full mb-12 sm:w-1/2 sm:mb-0"
              fluid={contactUs.childImageSharp.fluid}
              alt="Programmers doing their thing"
            />
            <div className="w-full sm:w-1/2">
              <ContactForm />
            </div>
          </div>
        </div>
      </FullSection>
    </Layout>
  );
};
