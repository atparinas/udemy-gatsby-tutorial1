import React from 'react'
import {grapql, Link} from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';


const ProductTemplate = () => {
  return (
    <Layout>
        <h1>Single Priduct Template</h1>
        <Link to="/" ><h3>Back To Home</h3></Link>
    </Layout>
  )
}

export default ProductTemplate
