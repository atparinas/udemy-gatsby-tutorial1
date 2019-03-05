import React from 'react'

import {graphql, Link} from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../../components/layout';

export const query = graphql`
{
    allContentfulProduct {
        edges {
            node {
                id
                title
                price
                description {
                    id
                    description
                }
                image {
                    id
                    fixed(width:300) {
                        ...GatsbyContentfulFixed
                    }
                }
            }
        }
    } 
}`

const Index = ({data}) => {
    console.log(data)
    const content = data.allContentfulProduct.edges.map(edge => {
        const product = edge.node;
        return (
            <div key={product.id}>
                <h4>{product.title}</h4>
                <h6> $ {product.price} </h6>
                <p>{product.description.description}</p>
                <div>
                    <Img fixed={product.image.fixed} />
                </div>
            </div>
        )
    })

    return (
        <Layout>
        Product Index Page
        <div>
            <div>   
                {content}
            </div>
            <Link to='/'>Back to Home</Link>
        </div>
        </Layout>
    )
}

export default Index
