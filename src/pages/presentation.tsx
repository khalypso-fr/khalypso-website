import { Divider, Stack } from '@mui/material'
import React, { FC } from 'react'
import Layout from '../layout/MainLayout'
import Me from '../templates/Me'

const PresentationPage: FC = () => {
  return (
    <Layout>
      <Stack direction="column" spacing={5} divider={<Divider />}>
        <Me />
      </Stack>
    </Layout>
  )
}

export default PresentationPage
