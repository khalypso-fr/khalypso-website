import React, { FC } from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material'

const OfferCard: FC<{ title: string; price: number; includes: string[] }> = ({
  title,
  price,
  includes,
}) => (
  <Card key={title} elevation={5}>
    <CardHeader
      title={title}
      titleTypographyProps={{ align: 'center' }}
      subheaderTypographyProps={{ align: 'center' }}
    />
    <CardContent>
      <div style={{ textAlign: 'center' }}>
        <Typography component="span" variant="h3" color="textPrimary">
          {price}€
        </Typography>{' '}
        <Typography component="span" variant="h6" color="textSecondary">
          /mois
        </Typography>
      </div>
      <ul>
        {includes.map((line) => (
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
      <Button fullWidth variant="contained" color="primary">
        En savoir plus
      </Button>
    </CardActions>
  </Card>
)

export default OfferCard
