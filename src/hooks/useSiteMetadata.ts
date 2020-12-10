import { useStaticQuery, graphql } from 'gatsby';

type SiteMetadataProps = {
  title: string;
  description: string;
  author: string;
  siteUrl: string;
  image: string;
  contact: string;
  keywords: string[];
  social: {
    facebook: string;
    linkedIn: string;
    instagram: string;
    github: string;
  };
  navigation: {
    name: string;
    path: string;
  }[];
};

type SiteMetadataQueryProps = {
  site: {
    siteMetadata: SiteMetadataProps;
  };
};

export const useSiteMetadata = (): SiteMetadataProps => {
  const { site } = useStaticQuery<SiteMetadataQueryProps>(graphql`
    query SiteMetaDataQuery {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          image
          contact
          keywords
          social {
            facebook
            linkedIn
            instagram
            github
          }
          navigation {
            name
            path
          }
        }
      }
    }
  `);

  return site.siteMetadata;
};
