import React from 'react';

import { Layout } from '../../components/layout';
import { SEO } from '../../components/seo';

export const HomePage: React.FC = () => (
  <Layout>
    <SEO title="home" />
    Hello World
  </Layout>
);
