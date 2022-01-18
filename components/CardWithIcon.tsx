import { FC } from 'react'
import { Box, Typography, Paper } from '@mui/material'

export const CardWithIcon: FC<{
  title: string
  description: string
}> = ({ title, description }) => {
  return (
    <div>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary" textAlign="justify">
        {description}
      </Typography>
    </div>
  )
}
