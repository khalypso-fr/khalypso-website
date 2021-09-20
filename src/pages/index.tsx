import { Stack } from '@mui/material'
import React from 'react'
import Layout from '../layout/MainLayout'
import MeTemplate from '../templates/MeTemplate'

const IndexPage = () => {
  return (
    <Layout>
      <Stack direction="column" spacing={10}>
        <MeTemplate id="presentation" alignItems="center" />
      </Stack>
    </Layout>
  )
}

export default IndexPage
