import React, { FC } from 'react'
import {
  AppBar,
  Container,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from '@mui/material'
import { graphql, useStaticQuery, Link, navigate } from 'gatsby'
import { useLocation } from '@reach/router'
import { Box, useTheme } from '@mui/system'

const WebsiteName: FC = () => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery<{
    site: { siteMetadata: { title: string } }
  }>(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { palette } = useTheme()
  return (
    <Typography
      variant="h4"
      sx={{ cursor: 'pointer' }}
      onClick={(event) => {
        event.preventDefault()
        navigate('/')
      }}
    >
      <svg height="30" width="40">
        <circle
          cx="15"
          cy="17"
          r="10"
          stroke={palette.secondary.main}
          stroke-width="3"
          fill="transparent"
        />
      </svg>
      {title}
    </Typography>
  )
}

type TabValue = 'website' | 'software' | 'presentation' | 'contact'

const useTabSelectedValue = (): TabValue | false => {
  const { pathname } = useLocation()
  switch (pathname) {
    case '/offres/site-web':
      return 'website'
    case '/offres/logiciel':
      return 'software'
    case '/presentation':
      return 'presentation'
    case '/contact':
      return 'contact'
  }
  return false
}

const LinkTab: FC<{ label: string; to: string; value: string }> = ({
  children,
  ...props
}) => {
  return <Tab component={Link} {...props} />
}

const Header: FC = () => {
  const selectedTab = useTabSelectedValue()
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <WebsiteName />
          </Box>
          <Tabs value={selectedTab} textColor="inherit">
            <LinkTab value="website" to="/offres/site-web" label="Votre site" />
            <LinkTab
              value="software"
              to="/offres/logiciel"
              label="Votre logiciel"
            />
            <LinkTab
              value="presentation"
              to="/presentation"
              label="Qui suis-je"
            />
            <LinkTab value="contact" to="/contact" label="Contact" />
          </Tabs>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
