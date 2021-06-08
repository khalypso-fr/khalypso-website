import React from 'react'

import Layout from '../../components/Layout'
import Seo from '../../components/seo'
import routes from '../../routes'

const IndexPage = () => {
  return (
    <Layout>
      <Seo title={routes.subscription.subRoutes.basic.pageName} />
    </Layout>
  )
}

export default IndexPage
