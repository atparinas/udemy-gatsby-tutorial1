import React from 'react'

import {StaticQuery, graphql} from 'gatsby';

import Img from 'gatsby-image';
import bg1 from '../images/bg/bg1.jpg';


const query = graphql`{
	file(relativePath:{eq:"bg/bg1.jpg"}){
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`

const render = data => {
    console.log(data);
    return(
        <Img fluid={data.file.childImageSharp.fluid} />
    )
}

const backgroundImage = () => {
  return (
    <StaticQuery 
        query={query}
        render={render} />
  )
}

export default backgroundImage
