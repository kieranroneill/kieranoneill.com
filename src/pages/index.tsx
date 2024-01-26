import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React, { FC } from 'react';

import Layout from '@theme/Layout';

// components
import Header from '@site/src/components/Header';
import Main from '@site/src/components/Main';

const IndexPage: FC = () => {
  const { siteConfig } = useDocusaurusContext();
  const description: string = `Mashing the keyboard until the code works...`;

  return (
    <Layout title={siteConfig.tagline} description={description}>
      <Header />

      <Main></Main>
    </Layout>
  );
};

export default IndexPage;
