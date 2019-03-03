import React from 'react'
import {Link} from 'gatsby'
import Layout from '../../components/layout';


export default function testing() {
  return (
    <Layout>
        <h1>Hello from testing</h1>
        <Link to='/'>Back to Home Page</Link>
    </Layout>
  )
}
