import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/SEO'
import PropTypes from 'prop-types'
import Login from '../components/login/login';


const LoginPage = ({ children }) => (
  <>
  <Layout>
        <SEO title="Home" />
        <Login  />

      </Layout>
  </>

);

LoginPage.propTypes = {
  
};


export default LoginPage;
