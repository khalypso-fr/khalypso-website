import { Grid } from '@mui/material'
import { GridProps, SxProps } from '@mui/system'
import { FC } from 'react'
import { CardWithIcon } from './CardWithIcon'

const articles: Array<{
  title: string
  description: string
}> = [
  {
    title: 'Moderne',
    description: 'Un site internet adapté avec son temps',
  },
  {
    title: 'Design sur mesure',
    description:
      "Révelez votre identité au travers d'une charte propre à votre entreprise",
  },
  {
    title: 'Sécurisez votre site',
    description: 'Vos visiteurs navigueront en toute confiance',
  },
]

const LandingArguments: FC<GridProps & { sx: SxProps }> = (props) => (
  <Grid container spacing={5} {...props}>
    {articles.map(({ title, description }, index) => (
      <Grid item key={index} xs={12} sm={6} md={4}>
        <CardWithIcon title={title} description={description} />
      </Grid>
    ))}
  </Grid>
)

export default LandingArguments
