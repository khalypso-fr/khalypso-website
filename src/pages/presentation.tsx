import { Divider, Stack } from '@mui/material'
import React, { FC } from 'react'
import MainLayout from '../layout/MainLayout'
import Me from '../templates/Me'

const PresentationPage: FC = () => {
  return (
    <MainLayout>
      <Stack direction="column" spacing={5} divider={<Divider />}>
        <Me />
      </Stack>
    </MainLayout>
  )
}

export default PresentationPage
