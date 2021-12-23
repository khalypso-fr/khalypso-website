import { Button, Grid, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React, { FC } from 'react'
import Layout from '../layout/MainLayout'

const IndexPage: FC = () => {
  return (
    <Layout>
      <Stack direction="column" spacing={2} alignItems="center">
        <Typography variant="h3">Je veux...</Typography>
        <Grid container>
          <Grid item xs={12} md={6} textAlign="center">
            <Link href="/offres/site-web">
              <Button variant="contained" color="secondary">
                Un site web
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={6} textAlign="center">
            <Link href="/offres/logiciel">
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
