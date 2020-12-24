import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faFacebookF,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { StaticImage } from 'gatsby-plugin-image';

import { useSiteMetadata } from '../../hooks/useSiteMetadata';

export const Header: React.FC = () => {
  const { title, social, navigation } = useSiteMetadata();

  return (
    <header className="bg-white">
      <div className="container flex flex-wrap items-center justify-between py-6 mx-auto">
        <AniLink
          fade
          to="/"
          className="flex items-center w-full px-4 pb-4 sm:w-auto sm:pb-0 lg:px-0"
        >
          <StaticImage
            src="../../../static/images/logo-small.png"
            height={35}
            width={35}
            alt={title || 'MachineServant'}
            blurredOptions={{}}
            transformOptions={{}}
          />
          <h1 className="pl-2 text-xl font-bold uppercase transition-colors duration-500 hover:text-gray-700">
            {title}
          </h1>
        </AniLink>
        <nav className="flex items-center justify-between w-full text-sm sm:w-auto">
          <ul className="flex justify-between px-2 sm:px-0">
            {navigation &&
              navigation.map(
                (nav) =>
                  nav && (
                    <li key={nav.name} className="px-2 sm:px-4">
                      <AniLink fade to={nav.path} title={nav.name}>
                        {nav.name}
                      </AniLink>
                    </li>
                  )
              )}
          </ul>
          <ul className="flex justify-between pr-2 sm:pl-6">
            {social?.linkedIn && (
              <li className="px-2">
                <a
                  href={social.linkedIn}
                  target="_blank"
                  rel="noreferrer noopener"
                  title="linkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
            )}
            {social?.facebook && (
              <li className="px-2">
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                  title="Facebook"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
            )}
            {social?.instagram && (
              <li className="px-2">
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  title="instagram"
                >
                  <FontAwesomeIcon icon={faInstagramSquare} />
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};
