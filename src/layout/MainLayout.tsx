import React, { FC } from 'react'
import {
  Container,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from '@mui/material'
import Header from '../components/Header'
import { paletteOptions } from '../config/palette'

const theme = createTheme({ palette: paletteOptions })

const Layout: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg" sx={{ paddingTop: 5 }}>
        {children}
      </Container>
    </ThemeProvider>
  )
}

export default Layout
