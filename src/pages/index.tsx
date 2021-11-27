import { Button, Grid, Stack, Typography } from '@mui/material'
import React, { FC } from 'react'
import { Link } from 'gatsby'
import Layout from '../layout/MainLayout'

const IndexPage: FC = () => {
  return (
    <Layout>
      <Stack direction="column" spacing={2} alignItems="center">
        <Typography variant="h3">Je veux...</Typography>
        <Grid container>
          <Grid item xs={12} md={6} textAlign="center">
            <Link to="/offres/site-web" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="secondary">
                Un site web
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={6} textAlign="center">
            <Link to="/offres/logiciel" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="secondary">
                Un logiciel sur-mesure
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Stack>
    </Layout>
  )
}

export default IndexPage
