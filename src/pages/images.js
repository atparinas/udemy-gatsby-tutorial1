import React from 'react'

import {Link, graphql} from 'gatsby';
import Layout from '../components/layout';
import BackgroundImage from '../components/backgroundImage';


export const query = graphql`
{
    allFile{
      totalCount
      edges{
        node{
          relativePath
        }
      }
    }
  }
`

const images = ({data}) => {

    const images = data.allFile.edges.map((edge, index) => {
        return <li key={index}>{edge.node.relativePath}</li>
    })

    return (
        <Layout>
            <h1> Hello from images </h1>
            <ul>
                {images}
            </ul>
            <BackgroundImage />
            <Link to='/'>Back to Home Page</Link>
        </Layout>
    )
}

export default images
