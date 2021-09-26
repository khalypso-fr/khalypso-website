import React, { FC } from 'react'
import { Divider, Stack, Typography, Button } from '@mui/material'
import Layout from '../../layout/MainLayout'
import Presentation from '../../templates/Presentation'
import Subscriptions from '../../templates/Subscriptions'

const { Item: PresentationItem } = Presentation

const QuickIntroduction: FC = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      textAlign="center"
      spacing={2}
    >
      <Typography variant="h2">
        Déployez votre site internet simplement
      </Typography>
      <Button variant="contained" color="secondary">
        En savoir plus
      </Button>
    </Stack>
  )
}

const articles: Array<{
  urlImage: string
  title: string
  description: string
}> = [
  {
    urlImage: '/undraw_Developer_activity_re_39tg.png',
    title: 'Moderne',
    description: 'Un site internet adapté avec son temps',
  },
  {
    urlImage: '/undraw_Design_process_re_0dhf.png',
    title: 'Design sur mesure',
    description:
      "Révelez votre identité au travers d'une charte propre à votre entreprise",
  },
  {
    urlImage: '/undraw_Secure_server_re_8wsq.png',
    title: 'Sécurisez votre site',
    description: 'Vos visiteurs navigueront en toute confiance',
  },
]

const WebPage = () => {
  return (
    <Layout>
      <Stack direction="column" spacing={5} divider={<Divider />}>
        <QuickIntroduction />
        <Presentation>
          {articles.map((article) => (
            <PresentationItem {...article} />
          ))}
        </Presentation>
        <Subscriptions />
      </Stack>
    </Layout>
  )
}

export default WebPage
