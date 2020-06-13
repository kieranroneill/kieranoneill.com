import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';

// Strings.
import { Titles } from '../../constants';

interface Props {
  title?: string;
}

const Helmet: React.FC<Props> = ({ title = Titles.DEFAULT }: Props) => {
  const description = 'Mashing the keyboard until the code works';
  const url = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
  const image = `${url}assets/me.jpg`;

  return (
    <ReactHelmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:title" content={title} />

      <meta name="og:description" content={description} />
      <meta name="og:image" content={image} />
      <meta name="og:title" content={title} />
      <meta name="og:type" content={'website'} />
      <meta name="og:url" content={url} />
    </ReactHelmet>
  );
};

export default Helmet;
