import React, { FC } from 'react'
import { Box, Grid, GridProps, Typography } from '@mui/material'

const PresentationTemplate: FC<GridProps> = (props) => {
  return (
    <Grid container spacing={2} {...props}>
      <Grid item xs={4}>
        <Typography variant="h3" align="center" textAlign="left">
          Déployez votre entreprise sur internet simplement.
        </Typography>
      </Grid>
      <Grid
        item
        xs={8}
        minHeight={500}
        sx={{
          backgroundImage: 'url("/undraw_Personal_website_re_c8dv.png")',
          backgroundSize: 'cover',
        }}
      />
    </Grid>
  )
}

export default PresentationTemplate
