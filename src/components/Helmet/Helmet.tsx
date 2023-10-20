import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';

const Helmet: React.FC = () => {
  const description = 'Mashing the keyboard until the code works';
  const url = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
  const image = `${url}assets/me.jpg`;

  return (
    <ReactHelmet>
      <title>{__APP_TITLE__}</title>
      <meta name="description" content={description} />

      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:title" content={__APP_TITLE__} />

      <meta name="og:description" content={description} />
      <meta name="og:image" content={image} />
      <meta name="og:title" content={__APP_TITLE__} />
      <meta name="og:type" content="website" />
      <meta name="og:url" content={url} />
    </ReactHelmet>
  );
};

export default Helmet;
