import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';


const Index = ({ children }) => (
  <>
    <Header />
    <div>index</div>
    <Footer />
  </>

);

Index.propTypes = {
  children: PropTypes.element.isRequired,
};


export default Index;
