import { Box, Container, Typography, useTheme } from '@mui/material'
import { BoxProps } from '@mui/system'
import React, { FC } from 'react'
import { CircleIcon } from '../components/CircleIcon'
import PageWrapper from '../PageWrapper'

const SiteTitle: FC = () => {
  const { palette } = useTheme()
  return (
    <Typography sx={{ color: palette.primary.contrastText }} fontSize={'10em'}>
      Khalypso
    </Typography>
  )
}

const Quote: FC = () => {
  const { palette } = useTheme()
  return (
    <Typography sx={{ color: palette.primary.contrastText }} fontSize={'2em'}>
      Concevoir. Déployer. Maintenir.
    </Typography>
  )
}

const LandingPresentation: FC<BoxProps> = ({ sx, ...props }) => (
  <Box
    {...props}
    sx={{
      display: 'grid',
      alignContent: 'center',
      justifyItems: 'center',
      ...sx,
    }}
  >
    <SiteTitle />
    <CircleIcon />
    <Quote />
  </Box>
)

const IndexPage: FC = () => {
  return (
    <PageWrapper>
      <Container maxWidth="xl">
        <LandingPresentation sx={{ marginTop: '50px' }} />
      </Container>
    </PageWrapper>
  )
}

{
  /* <Layout>
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
</Layout> */
}

export default IndexPage
