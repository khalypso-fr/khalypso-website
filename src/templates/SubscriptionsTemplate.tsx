import { Box, Typography, Stack, Divider } from '@mui/material'
import { BoxProps } from '@mui/system'
import React, { FC } from 'react'
import OfferCard from '../components/OfferCard'

// const tiers = [
//   {
//     title: 'Basique',
//     price: 70,
//     includes: [
//       'Nom de domaine inclus',
//       '5 pages incluses',
//       '6 jours de développement par an inclus',
//       'Maintenance et MAJ au quotidien',
//     ],
//   },
// ]

const tiers = []

const SubscriptionsTemplates: FC<BoxProps> = (props) => {
  return (
    <Box {...props}>
      <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
        Abonnements
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary">
        Déployez votre entreprise sur internet simplement.
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={5}
      >
        {tiers.map((tier) => (
          <OfferCard {...tier} />
        ))}
      </Stack>
    </Box>
  )
}

export default SubscriptionsTemplates
