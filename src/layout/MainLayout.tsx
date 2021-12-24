import React, { FC } from 'react'
import { Container } from '@mui/material'
import Header from '../components/Header'
import WrapperMaterial from './WrapperMaterial'

const MainLayout: FC = ({ children }) => {
  return (
    <WrapperMaterial>
      <Header />
      <Container maxWidth="lg" sx={{ paddingTop: 5 }}>
        {children}
      </Container>
    </WrapperMaterial>
  )
}

export default MainLayout
