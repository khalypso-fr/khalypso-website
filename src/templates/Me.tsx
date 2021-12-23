import { Container, Link, Paper, Stack, Typography } from '@mui/material'
import React, { FC } from 'react'
import NextLink from 'next/link'

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

// const parcoursItems: Array<{ year: number; description: string }> = [
//   {
//     year: 2017,
//     description: "Obtention de mon master à l'université de la Sorbonne",
//   },
//   {
//     year: 2021,
//     description: 'Création de Khalypso',
//   },
// ]

// const Parcours = () => (
//   <Timeline position="alternate">
//     {parcoursItems.map((item) => (
//       <TimelineItem>
//         <TimelineOppositeContent color="text.secondary">
//           {item.year}
//         </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineDot />
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent>{item.description}</TimelineContent>
//       </TimelineItem>
//     ))}
//   </Timeline>
// )

// Mon travail est de créer des produits pour le web comme une page vitrine
// à une application web pour votre entreprise. Etant polyvalent, je
// réalise chaque projet de sa conception à la mise en place de votre site
// web. Pourquoi choisir Khalypso? Aujourd'hui il est indispensable pour
// une entreprise d'avoir un site internet. Vos clients sont en ligne et
// peuvent tous accéder à votre site contrairement aux reseaux sociaux. Un
// site internet dans l'air du temps et sécurisé inspire confiance et vous
// permet de maitriser votre communication en ligne. Selon le site
// Grizzelead, 56% des internautes n'ont pas confiance dans les entreprises
// sans site web. Celui ci vous permet aussi d'être trouvé rapidement sur
// un moteur de recherche il est possible également d'ajouter votre
// localisation afin de permettre un itinéraire à vos clients. Un site
// internet vous permet de vendre en ligne et de ce fait fidéliser vos
// clients de passage et aussi créer une nouvelle clientèle en ligne. Pour
// finir, un site internet vous permet de montrer votre expertise dans
// votre secteur d'activité. Pour résumer, un abonnement Khalypso vous
// permettra de: Parler de vous. Gagner en notoriété et en visibilité.
// Fideliser d'avantage votre clientèle. Toucher une nouvelle clientèle
// également. Génerer de la publicité pour votre entreprise. Avoir un site
// internet disponible 24h/24. Pour conclure, un site internet est un très
// bon investissement pour vous et cela vous permettra de croitre votre
// chiffre d'affaire.

const Me: FC = () => (
  <Container maxWidth="sm">
    <Stack direction="column" spacing={2} alignItems="center">
      <Avatar />
      <Typography variant="h6" color="GrayText">
        Bonjour, je suis
      </Typography>
      <Typography variant="h4">Mathieu Khalem</Typography>
      <Typography variant="body1" textAlign="justify">
        J'ai 28 ans. Je suis un <strong>passionné d'informatique</strong> depuis
        mon plus jeune âge et ma passion est devenue mon métier. En 2021, j'ai
        décidé de fonder <strong>Khalypso</strong> afin d'accompagner les
        entreprises dans leur transformation digitale.
        <br />
        <Typography variant="overline" fontStyle="italic">
          Qu'est-ce que la transformation digitale ?
        </Typography>
        <br />
        La transformation digitale représente les enjeux de l'intégration des{' '}
        <strong>outils numériques</strong> dans son entreprise que ce soit pour
        sa gestion ou sa présentation.
        <br />
        Le{' '}
        <Link href="https://www.arcep.fr/uploads/tx_gspublication/rapport-barometre-numerique-edition-2021.pdf">
          baromètre du numérique 2021
        </Link>{' '}
        publié par l'ARCEP regroupe plusieurs statistiques qui montre la{' '}
        <strong>nécessité</strong> de cette transition:
        <ul>
          <li>84% des personnes ont un smartphone</li>
          <li>
            92% de la population surfent sur Internet (<strong>83%</strong> tous
            les jours !)
          </li>
          <li>
            76% des personnes de douze ans et plus ont ainsi effectué au moins
            un achat en ligne
          </li>
        </ul>
        Ces chiffres ne font qu'augmenter à mesure que le web évolue. C'est
        pourquoi <strong>chaque entreprise</strong> devrait pouvoir détailler
        son offre au travers du support numérique.
        <br />
        L'informatique devrait s'intégrer et simplifier la vie d'une entreprise
        et c'est sur ces points que je vous propose{' '}
        <NextLink href="/">mes services</NextLink>.
      </Typography>
    </Stack>
  </Container>
)

export default Me
