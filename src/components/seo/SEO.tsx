import React from 'react';

import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';

import { useSiteMetadata } from '../../hooks/useSiteMetadata';

type SEOProps = {
  description?: string;
  lang?: string;
  meta?: any[];
  title: string;
  keywords?: string[];
  image?: {
    src: string;
    width: number;
    height: number;
  };
  article?: boolean;
};

export const SEO: React.FC<SEOProps> = ({
  lang = 'en',
  title,
  meta = [],
  description,
  article = false,
  keywords = [],
  image,
}) => {
  const {
    title: siteTitle,
    description: siteDescription,
    keywords: siteKeywords,
    image: siteImage,
    siteUrl,
    author,
  } = useSiteMetadata();

  const { pathname } = useLocation();

  const url = `${siteUrl}${pathname}`;

  const metaKeywords = keywords && keywords.length ? keywords : siteKeywords;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${siteTitle}`}
      meta={[
        {
          name: 'description',
          content: description || siteDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description || siteDescription,
        },
        {
          property: 'og:type',
          content: article ? 'article' : 'website',
        },
        {
          property: 'og:url',
          content: url,
        },
        {
          property: 'og:site_name',
          content: 'MachineServant',
        },
        {
          property: 'og:locale',
          content: 'en_US',
        },
        {
          name: 'twitter:creator',
          content: author,
        },
        {
          name: 'twitter:site',
          content: author,
        },
        {
          name: 'twitter:url',
          content: url,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: description || siteDescription,
        },
        {
          name: 'keywords',
          content: metaKeywords.join(','),
        },
      ]
        .concat(
          image
            ? [
                {
                  property: 'og:image',
                  content: `${siteUrl}${image.src}`,
                },
                {
                  property: 'og:image:width',
                  content: image && image.width ? `${image.width}` : '',
                },
                {
                  property: 'og:image:height',
                  content: image && image.height ? `${image.height}` : '',
                },
                {
                  name: 'twitter:card',
                  content: 'summary_large_image',
                },
              ]
            : [
                {
                  property: 'og:image',
                  content: `${siteUrl}${siteImage}`,
                },
                {
                  name: 'twitter:card',
                  content: 'summary',
                },
              ]
        )
        .concat(meta)}
    />
  );
};
