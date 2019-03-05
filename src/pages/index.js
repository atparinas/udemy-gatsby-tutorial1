import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Info from '../components/info';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Info />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div><Link to="/page-2/">Go to page 2</Link></div>
    <div><Link to="/products/testing">Go to Testing Page</Link></div>
    <div><Link to="/images">Go to Images page</Link></div>
    <div><Link to="/products">Go to Products page</Link></div>v


  </Layout>
)

export default IndexPage
