import React, { FC } from 'react'
import { Typography, Grid } from '@mui/material'
import { Box } from '@mui/system'

const PresentationItem: FC<{
  urlImage: string
  title: string
  description: string
}> = ({ urlImage, title, description }) => (
  <Box>
    <div
      style={{
        height: 140,
        backgroundImage: `url("${urlImage}")`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    />
    <Typography gutterBottom variant="h5" component="div">
      {title}
    </Typography>
    <Typography variant="body1" color="text.secondary">
      {description}
    </Typography>
  </Box>
)

const Presentation: FC & { Item: typeof PresentationItem } = ({ children }) => {
  return (
    <Grid container spacing={2}>
      {React.Children.map(children, (child) => (
        <Grid item xs={12} sm={6} md={4}>
          {child}
        </Grid>
      ))}
    </Grid>
  )
}

Presentation.Item = PresentationItem

export default Presentation
