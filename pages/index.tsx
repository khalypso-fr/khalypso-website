import { Container, Stack, Divider } from '@mui/material'
import React, { FC } from 'react'
import LandingPresentation from '../components/LandingPresentation'
import LandingArguments from '../components/LandingArguments'

const IndexPage: FC = () => {
  return (
    <Container maxWidth="xl">
      <Stack spacing={5} divider={<Divider />} sx={{ marginTop: '50px' }}>
        <LandingPresentation />
        <LandingArguments sx={{ width: '100%' }} />
      </Stack>
    </Container>
  )
}

export default IndexPage
