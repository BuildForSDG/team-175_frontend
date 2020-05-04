import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';


const SEO = (props) => {
  const {
    meta, title, lang,
  } = props;
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={title}
      meta={meta}
    />
  );
};

SEO.defaultProps = {
  lang: 'en',
  meta: [],
};

SEO.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
