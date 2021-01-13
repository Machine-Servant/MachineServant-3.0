import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faFacebookF,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';
import { StaticImage } from 'gatsby-plugin-image';
import GithubButton from 'react-github-btn';

import { useSiteMetadata } from '../../hooks/useSiteMetadata';

export const Footer: React.FC = () => {
  const { title, contact, social } = useSiteMetadata();

  return (
    <footer className="bg-gray-200">
      <div className="container flex flex-col py-12 mx-auto sm:flex-row justify-evenly">
        <div className="mb-12 sm:mb-0">
          <div className="flex items-center justify-center mb-4">
            <StaticImage
              className="inline-block"
              layout="fixed"
              height={35}
              width={35}
              src="../../../static/images/logo-small.png"
              alt={title || 'MachineServant'}
              transformOptions={{}}
              blurredOptions={{}}
            />
            <h1 className="text-xl font-bold text-black uppercase sm:text-xl">
              {title}
            </h1>
          </div>
          <div className="text-center sm:text-left">
            <h2>Akron, Ohio</h2>
            <h2>
              <a rel="noreferrer" target="_blank" href="tel:3302853015">
                (330)-285-3015
              </a>
            </h2>
            <h2>
              <a
                className="underline"
                rel="noreferrer"
                target="_blank"
                href={`mailto:${contact}`}
              >
                {contact}
              </a>
            </h2>
          </div>
        </div>
        <div className="text-center sm:text-left">
          <div className="mb-4 text-3xl">
            {social?.linkedIn && (
              <a href={social.linkedIn} rel="noreferrer" target="_blank">
                <FontAwesomeIcon
                  className="mr-6"
                  icon={faLinkedinIn}
                  title="LinkedIn"
                />
              </a>
            )}
            {social?.facebook && (
              <a href={social.facebook} rel="noreferrer" target="_blank">
                <FontAwesomeIcon
                  className="mr-6"
                  icon={faFacebookF}
                  title="Facebook"
                />
              </a>
            )}
            {social?.instagram && (
              <a href={social.instagram} rel="noreferrer" target="_blank">
                <FontAwesomeIcon
                  className="mr-6"
                  icon={faInstagramSquare}
                  title="Instagram"
                />
              </a>
            )}
          </div>
          {social?.github && (
            <span className="block mb-4">
              <GithubButton href={social.github}>
                Follow me @machine-servant
              </GithubButton>
            </span>
          )}
          <span className="block">
            ©{new Date().getFullYear()} by {title}.
          </span>
        </div>
      </div>
    </footer>
  );
};
