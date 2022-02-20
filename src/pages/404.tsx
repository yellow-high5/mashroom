import Layout from 'components/layout';
import React from 'react';

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <h1>PAGE NOT FOUND</h1>
      <p>
        Sorry{' '}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{' '}
      </p>
    </Layout>
  );
};

export default NotFoundPage;
