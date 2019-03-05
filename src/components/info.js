import React from 'react'

import {StaticQuery, graphql} from 'gatsby';


const content = data => {
    const {title, description, author} = data.site.siteMetadata;

    return (
        <div>
            <div>{title}</div>
            <div>{description}</div>
            <div>{author}</div>
        </div>
    )
}

const query = graphql`{
    site{
      siteMetadata {
        title
        description
        author
      }
    }
}`


const info = () => {

  return (
    <StaticQuery 
        query={query} 
        render={content} />
  )
}

export default info
