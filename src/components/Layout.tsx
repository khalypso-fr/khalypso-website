import React, { FC } from 'react'

import {
  Container,
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
} from '@material-ui/core'

import Header from './Header'
import Footer from './Footer'
import { makeStyles } from '@material-ui/styles'

const theme = createMuiTheme({ palette: { type: 'dark' } })

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: 40,
  },
}))

const Layout: FC = ({ children }) => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg" className={classes.container}>
        {children}
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default Layout
