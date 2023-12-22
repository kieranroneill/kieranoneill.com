import React, { FC } from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const Helmet: FC = () => {
  const { t } = useTranslation();
  const description = t('captions.description');
  const url = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
  const imageOfMe: string = `${url}assets/images/me.png`;

  return (
    <ReactHelmet>
      <title>{__APP_TITLE__}</title>
      <meta name="description" content={description} />

      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageOfMe} />
      <meta name="twitter:title" content={__APP_TITLE__} />

      <meta name="og:description" content={description} />
      <meta name="og:image" content={imageOfMe} />
      <meta name="og:title" content={__APP_TITLE__} />
      <meta name="og:type" content="website" />
      <meta name="og:url" content={url} />
    </ReactHelmet>
  );
};

export default Helmet;
