import React from 'react'
import {Link} from 'gatsby'
import Layout from '../../components/layout';
import Section from '../../components/section/section';


export default function testing() {
  return (
    <Layout>
        <h1>Hello from testing</h1>
        <Link to='/'>Back to Home Page</Link>
        <Section />
    </Layout>
  )
}
