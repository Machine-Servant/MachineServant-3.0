import { useStaticQuery, graphql } from 'gatsby';

type SiteMetadataProps = {
  title: string;
  description: string;
  author: string;
  siteUrl: string;
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
        }
      }
    }
  `);

  return site.siteMetadata;
};
