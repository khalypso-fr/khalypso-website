import React, { FC } from 'react'
import {
  Box,
  Grid,
  GridProps,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material'

const PresentationTemplate: FC<GridProps> = (props) => {
  const downMd = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'))
  return (
    <Grid container spacing={2} {...props}>
      <Grid item xs={downMd ? 12 : 4}>
        <Typography
          variant="h3"
          align="center"
          textAlign={downMd ? 'center' : 'left'}
        >
          Déployez votre entreprise sur internet simplement.
        </Typography>
      </Grid>
      {downMd ? null : (
        <Grid
          item
          xs={8}
          minHeight={500}
          sx={{
            backgroundImage: 'url("/undraw_Responsive_re_e1nn.png")',
            backgroundSize: 'cover',
          }}
        />
      )}
    </Grid>
  )
}

export default PresentationTemplate
