import React, { FC } from 'react'
import { Box, Grid, GridProps, Stack, Typography } from '@mui/material'
import { GitHub } from '@mui/icons-material'

const MeTemplate: FC<GridProps> = (props) => {
  return (
    <Box>
      <Grid container spacing={2} {...props}>
        <Grid
          item
          xs={8}
          minHeight={600}
          sx={{
            backgroundImage: 'url("/undraw_Developer_activity_re_39tg.png")',
            backgroundSize: 'cover',
          }}
        />
        <Grid item xs={4}>
          <Stack direction="column" spacing={1}>
            <Typography variant="h3" align="center" textAlign="left">
              Mathieu Khalem
            </Typography>
            <Typography
              variant="h5"
              align="center"
              textAlign="left"
              color="GrayText"
            >
              Développeur informatique
            </Typography>
            <Box>
              <a href="https://github.com/mathieukh">
                <GitHub />
              </a>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

export default MeTemplate
