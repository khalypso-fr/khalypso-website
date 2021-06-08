import React, { FC } from 'react'

import {
  AppBar,
  Link,
  makeStyles,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { useLocation } from '@reach/router'
import { graphql, navigate, useStaticQuery } from 'gatsby'
import { Cloud } from '@material-ui/icons'
import routes from '../routes'

const { home, subscription } = routes

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
  return (
    <Typography
      variant="h4"
      component={Link}
      href={home.route.fullPath}
      color="textPrimary"
      underline="none"
    >
      {title}
    </Typography>
  )
}

const useStyles = makeStyles(() => ({
  websiteName: {
    flexGrow: 1,
  },
}))

const useRootPath = () => {
  const { pathname } = useLocation()
  const [root] = pathname.slice(1).split('/')
  return `/${root}`
}

const Header: FC = () => {
  const classes = useStyles()
  const rootPath = useRootPath()
  return (
    <AppBar position="static" color="default" elevation={10}>
      <Toolbar>
        <div className={classes.websiteName}>
          <Cloud /> <WebsiteName />
        </div>
        <Tabs value={rootPath}>
          <Tab
            value={home.route.fullPath}
            label={home.route.pageName}
            onClick={() => navigate(home.route.fullPath)}
          />
          <Tab
            value={subscription.route.fullPath}
            label={subscription.route.pageName}
            onClick={() => navigate(subscription.route.fullPath)}
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  )
}

export default Header
