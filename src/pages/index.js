import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/SEO'
import PropTypes from 'prop-types'
import Index from '../components/'


const IndexPage = ({ children }) => (
  <>
  <Layout>
        <SEO title="Home" />
        <Index  />

      </Layout>
  </>

);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};


export default IndexPage;
