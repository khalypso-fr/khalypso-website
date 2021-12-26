import { Container, Stack, Divider } from '@mui/material'
import React, { FC } from 'react'
import LandingPresentation from '../components/LandingPresentation'
import LandingArguments from '../components/LandingArguments'
import PageWrapper from '../PageWrapper'

const IndexPage: FC = () => {
  return (
    <PageWrapper>
      <Container maxWidth="xl">
        <Stack spacing={5} divider={<Divider />} sx={{ marginTop: '50px' }}>
          <LandingPresentation />
          <LandingArguments sx={{ width: '100%' }} />
        </Stack>
      </Container>
    </PageWrapper>
  )
}

export default IndexPage
