import React, { FC } from 'react'
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  responsiveFontSizes,
} from '@mui/material'
import { paletteOptions } from './config/palette'

const theme = responsiveFontSizes(createTheme({ palette: paletteOptions }))

const PageWrapper: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default PageWrapper
