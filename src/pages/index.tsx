import { Container } from '@mui/material'
import React, { FC } from 'react'
import LandingPresentation from '../components/LandingPresentation'
import PageWrapper from '../PageWrapper'

const IndexPage: FC = () => {
  return (
    <PageWrapper>
      <Container maxWidth="xl">
        <LandingPresentation sx={{ marginTop: '50px' }} />
      </Container>
    </PageWrapper>
  )
}

export default IndexPage
