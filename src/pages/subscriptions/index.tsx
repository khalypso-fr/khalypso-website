import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core'
import React from 'react'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import routes from '../../routes'

const {
  subscription: {
    subRoutes: { basic: basicSubscription },
  },
} = routes

const tiers = [
  {
    title: 'Basique',
    price: '70',
    description: [
      'Nom de domaine inclus',
      '5 pages incluses',
      '6 jours de développement par an inclus',
      '1 adresse e-mail attaché au nom de domaine',
      'Maintenance et MAJ au quotidien',
    ],
    buttonText: 'En savoir plus',
    buttonVariant: 'contained',
  },
]

const useStyles = makeStyles((theme) => ({
  description: {
    margin: '20px 0',
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
}))

const Subscriptions = () => {
  const classes = useStyles()
  return (
    <Layout>
      <Seo title={routes.subscription.route.pageName} />
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Abonnements
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="textSecondary"
        className={classes.description}
        component="p"
      >
        Déployez votre entreprise sur internet simplement.
      </Typography>
      <Grid container spacing={5} alignItems="flex-start" justify="center">
        {tiers.map((tier) => (
          <Grid item key={tier.title} xs={12} md={4}>
            <Card>
              <CardHeader
                title={tier.title}
                titleTypographyProps={{ align: 'center' }}
                subheaderTypographyProps={{ align: 'center' }}
                className={classes.cardHeader}
              />
              <CardContent>
                <div className={classes.cardPricing}>
                  <Typography component="h2" variant="h3" color="textPrimary">
                    {tier.price}€
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    /mois
                  </Typography>
                </div>
                <ul>
                  {tier.description.map((line) => (
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="left"
                      key={line}
                    >
                      {line}
                    </Typography>
                  ))}
                </ul>
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  href={basicSubscription.fullPath}
                  variant="contained"
                  color="primary"
                >
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}

export default Subscriptions
