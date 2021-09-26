import { Divider, Stack } from '@mui/material'
import React, { FC } from 'react'
import Layout from '../layout/MainLayout'

const IndexPage: FC = () => {
  return (
    <Layout>
      <Stack direction="column" spacing={5} divider={<Divider />}></Stack>
    </Layout>
  )
}

export default IndexPage
