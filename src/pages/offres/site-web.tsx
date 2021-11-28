import React, { FC } from 'react'
import { Divider, Stack, Typography } from '@mui/material'
import Layout from '../../layout/MainLayout'
import Presentation from '../../templates/Presentation'

const { Item: PresentationItem } = Presentation

const QuickIntroduction: FC = () => {
  return (
    <Stack direction="column" textAlign="center" spacing={2}>
      <Typography variant="h2">
        Déployez votre site internet simplement
      </Typography>
      <Typography variant="body1" color="GrayText" textAlign="justify">
        Vos clients sont en ligne et doivent pouvoir accéder à votre entreprise.
        Celui-ci vous permet d'étaler votre savoir-faire ou vos produits dans
        une charte graphique qui vous correspond et vous identifie. Un site
        internet dans l'air du temps et sécurisé inspire confiance et vous
        permet de maitriser votre communication en ligne.
      </Typography>
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
      </Stack>
    </Layout>
  )
}

export default WebPage
