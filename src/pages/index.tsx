import { Box, Container, Divider, Typography, useTheme } from '@mui/material'
import { BoxProps } from '@mui/system'
import React, { FC } from 'react'
import { CircleIcon } from '../components/CircleIcon'
import PageWrapper from '../PageWrapper'

const SiteTitle: FC = () => (
  <Typography
    sx={{ color: ({ palette }) => palette.primary.contrastText }}
    fontSize={'10em'}
  >
    Khalypso
  </Typography>
)

const Quote: FC = () => (
  <Typography
    sx={{ color: ({ palette }) => palette.primary.contrastText }}
    fontSize={'2em'}
  >
    Concevoir. Déployer. Maintenir.
  </Typography>
)

const LandingPresentation: FC<BoxProps> = ({ sx, ...props }) => (
  <Box
    {...props}
    sx={{
      display: 'grid',
      alignContent: 'center',
      justifyItems: 'center',
      ...sx,
    }}
  >
    <SiteTitle />
    <CircleIcon />
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
