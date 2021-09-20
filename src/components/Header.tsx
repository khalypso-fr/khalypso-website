import React, { FC } from 'react'
import {
  AppBar,
  Container,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material'
import { graphql, useStaticQuery, Link, navigate } from 'gatsby'
import { useLocation } from '@reach/router'
import { Box } from '@mui/system'

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
  const [firstLetter, ...remaining] = title
  return (
    <Typography
      variant="h4"
      sx={{ cursor: 'pointer' }}
      onClick={(event) => {
        event.preventDefault()
        navigate('/')
      }}
    >
      {title}
    </Typography>
  )
}

type TabValue = 'development'

const useTabSelectedValue = (): TabValue | false => {
  const { pathname } = useLocation()
  if (!pathname.startsWith('/')) {
    return false
  }
  const [, firstPath] = pathname.split('/')
  return firstPath === 'development' ? 'development' : false
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
            <LinkTab value="development" to="/development" label="Création" />
          </Tabs>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
