import { Stack, StackProps, Typography } from '@mui/material'
import React, { FC } from 'react'
import { GoldCircle } from '../components/GoldCircle'

export const SiteTitle: FC = () => (
  <Typography
    sx={{ color: ({ palette }) => palette.primary.contrastText }}
    variant="h1"
  >
    Khalypso
  </Typography>
)

export const Quote: FC = () => (
  <Typography
    sx={{ color: ({ palette }) => palette.primary.contrastText }}
    variant="h4"
  >
    Concevoir. Déployer. Maintenir.
  </Typography>
)

const LandingPresentation: FC<StackProps> = (props) => (
  <Stack direction="column" spacing={2} alignItems="center" {...props}>
    <SiteTitle />
    <GoldCircle />
    <Quote />
  </Stack>
)

export default LandingPresentation
