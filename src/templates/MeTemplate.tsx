import React, { FC } from 'react'
import {
  Box,
  Grid,
  GridProps,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { GitHub } from '@mui/icons-material'

const MeTemplate: FC<GridProps> = (props) => {
  const isXs = useMediaQuery<Theme>((theme) => theme.breakpoints.only('xs'))
  return (
    <Box>
      <Grid container spacing={2} {...props}>
        {isXs ? null : (
          <Grid
            item
            sm={8}
            minHeight={600}
            sx={{
              backgroundImage: 'url("/undraw_Developer_activity_re_39tg.png")',
              backgroundSize: 'cover',
            }}
          />
        )}
        <Grid item xs={12} sm={4}>
          <Stack direction="column" spacing={1}>
            <Typography
              variant="h3"
              align="center"
              textAlign={isXs ? 'center' : 'left'}
            >
              Mathieu Khalem
            </Typography>
            <Typography
              variant="h5"
              align="center"
              textAlign={isXs ? 'center' : 'left'}
              color="GrayText"
            >
              Développeur informatique
            </Typography>
            <Box textAlign={isXs ? 'center' : 'left'}>
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
