import React from 'react';
import { Helmet } from 'react-helmet';

export default function NotFound(props) {
  return (
    <h1>
      <Helmet>
        <title>404 page</title>
        <meta name='prerender-status-code' content='404'></meta>
      </Helmet>
      Page does not exist
    </h1>
  );
}
