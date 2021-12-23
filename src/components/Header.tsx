import React, { FC } from 'react'
import {
  AppBar,
  Container,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from '@mui/material'
import { useRouter } from 'next/router'
import { Box, useTheme } from '@mui/system'
import Link from 'next/link'

const WebsiteName: FC = () => {
  const { palette } = useTheme()
  const { push } = useRouter()
  return (
    <Typography
      variant="h4"
      sx={{ cursor: 'pointer' }}
      onClick={(event: Event) => {
        event.preventDefault()
        push('/')
      }}
    >
      <svg height="30" width="40">
        <circle
          cx="15"
          cy="17"
          r="10"
          stroke={palette.secondary.main}
          strokeWidth="3"
          fill="transparent"
        />
      </svg>
      Khalypso
    </Typography>
  )
}

type TabValue = 'website' | 'software' | 'presentation' | 'contact'

const useTabSelectedValue = (): TabValue | false => {
  const { pathname } = useRouter()
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

const LinkTab: FC<{ label: string; href: string; value: string }> = ({
  children,
  ...props
}) => {
  return (
    <Link href={props.href}>
      <Tab {...props} />
    </Link>
  )
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
            <LinkTab
              value="website"
              href="/offres/site-web"
              label="Votre site"
            />
            <LinkTab
              value="software"
              href="/offres/logiciel"
              label="Votre logiciel"
            />
            <LinkTab
              value="presentation"
              href="/presentation"
              label="Qui suis-je"
            />
            <LinkTab value="contact" href="/contact" label="Contact" />
          </Tabs>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
