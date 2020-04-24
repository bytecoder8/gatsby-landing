import React from 'react';
import { Link } from 'gatsby';

import LayoutMain from 'layouts/layout-main';
import { SEO } from 'components/shared/seo/seo';
import Hero from 'components/pages/index/hero/hero';
import Howto from 'components/pages/index/howto/howto';

const IndexPage = () => (
  <LayoutMain>
    <SEO />
    <Hero />
    <Howto />
  </LayoutMain>
);

export default IndexPage;
