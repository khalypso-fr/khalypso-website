import { Container, Paper, Stack, Typography } from '@mui/material'
import React, { FC } from 'react'

const Avatar: FC = () => (
  <Paper
    elevation={5}
    style={{
      width: 200,
      height: 200,
      borderRadius: 100,
      border: 'solid',
    }}
  />
)

const Me: FC = () => (
  <Container maxWidth="sm">
    <Stack direction="column" spacing={2} alignItems="center">
      <Avatar />
      <Typography variant="h6" color="GrayText">
        Bonjour, je suis
      </Typography>
      <Typography variant="h4">Mathieu Khalem</Typography>
      <Typography variant="body1" textAlign="justify">
        Désireux d'apprendre l'informatique dès mon plus jeune âge, j'ai rêvé de
        transformer ma passion en travail. J'ai pu le concrétiser en devenant
        développeur après mon master à l'UPMC. Mon envie est de transmettre les
        connaissances que j'ai acquise à travers mes créations. <br />
        Fort de mon expérience, j'ai pour objectif d'accompagner et d'accomplir
        chaque projet qui me sont confiés.
      </Typography>
    </Stack>
  </Container>
)

export default Me
