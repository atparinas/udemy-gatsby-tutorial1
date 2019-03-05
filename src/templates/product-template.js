import React from 'react'
import {graphql, Link} from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

export const query = graphql`query($id:String!){
  contentfulProduct(id: {eq:$id}) {
    id
    title
    price
    description{
    	description
  	}
    image {
      fluid {
				...GatsbyContentfulFluid
      }
    }
    
  }
}`


const ProductTemplate = ({data}) => {

  const product = data.contentfulProduct;
  console.log(product)

  return (
    <Layout>
        <Link to="/products" ><h4>Back To Products</h4></Link>
        <h1>{product.title} <span> ${product.price}</span> </h1>
        <p> {product.description.description} </p>
        <div>
          <Img fluid={product.image.fluid} />
        </div>
    </Layout>
  )
}

export default ProductTemplate
