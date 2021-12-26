import { Box, Container, Typography, useTheme } from '@mui/material'
import { BoxProps } from '@mui/system'
import React, { FC } from 'react'
import { GoldCircle } from '../components/GoldCircle'
import PageWrapper from '../PageWrapper'

const SiteTitle: FC = () => (
  <Typography
    sx={{ color: ({ palette }) => palette.primary.contrastText }}
    variant="h1"
  >
    Khalypso
  </Typography>
)

const Quote: FC = () => (
  <Typography
    sx={{ color: ({ palette }) => palette.primary.contrastText }}
    variant="h4"
  >
    Concevoir. Déployer. Maintenir.
  </Typography>
)

const LandingPresentation: FC<BoxProps> = ({ sx, ...props }) => (
  <Box
    {...props}
    sx={{
      display: 'grid',
      rowGap: '20px',
      alignContent: 'center',
      justifyItems: 'center',
      textAlign: 'center',
      ...sx,
    }}
  >
    <SiteTitle />
    <GoldCircle />
    <Quote />
  </Box>
)

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
