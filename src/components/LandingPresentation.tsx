import { Box, Typography } from '@mui/material'
import { BoxProps } from '@mui/system'
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

export default LandingPresentation
