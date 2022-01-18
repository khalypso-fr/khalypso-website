import {
  responsiveFontSizes,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material'
import { AppProps } from 'next/app'
import { FC } from 'react'
import { paletteOptions } from '../config/palette'
import '../styles/globals.css'

const theme = responsiveFontSizes(createTheme({ palette: paletteOptions }))

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
