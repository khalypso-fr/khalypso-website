import { Stack } from '@mui/material'
import React from 'react'
import Layout from '../layout/MainLayout'
import PresentationTemplate from '../templates/PresentationTemplate'
import SubscriptionsTemplate from '../templates/SubscriptionsTemplate'

const WebPage = () => {
  return (
    <Layout>
      <Stack direction="column" spacing={10}>
        <PresentationTemplate
          id="presentation"
          direction="row"
          alignItems="center"
        />
        <SubscriptionsTemplate id="subscriptions" />
      </Stack>
    </Layout>
  )
}

export default WebPage
