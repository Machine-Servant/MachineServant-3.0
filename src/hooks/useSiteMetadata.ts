import { useStaticQuery, graphql } from 'gatsby';

type SiteMetadataProps = {
  title?: string;
  description?: string;
  author?: string;
  siteUrl?: string;
  image?: string;
  contact?: string;
  keywords: GatsbyTypes.Maybe<readonly (string | undefined)[]>;
  social?: {
    facebook?: string;
    linkedIn?: string;
    instagram?: string;
    github?: string;
  };
  navigation: GatsbyTypes.Maybe<
    readonly GatsbyTypes.Maybe<
      Pick<GatsbyTypes.SiteSiteMetadataNavigation, 'name' | 'path'>
    >[]
  >;
};

export const useSiteMetadata = (): SiteMetadataProps => {
  const { site } = useStaticQuery<GatsbyTypes.SiteMetaDataQueryQuery>(graphql`
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

  return site!.siteMetadata!;
};
