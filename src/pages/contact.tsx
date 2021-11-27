import { Grid, Divider, TextField, Typography, Stack } from '@mui/material'
import { Email as EmailIcon } from '@mui/icons-material'
import React, { FC } from 'react'
import Layout from '../layout/MainLayout'

const ContactEntry: FC<{ label: string; icon: React.ReactNode }> = ({
  label,
  icon,
}) => (
  <Typography
    variant="h6"
    sx={{
      '& > *': { verticalAlign: 'middle' },
    }}
  >
    {icon}
    <span style={{ marginLeft: 5 }}>{label}</span>
  </Typography>
)

const ContactForm: FC = () => {
  return (
    <>
      <Grid
        container
        justifyContent="space-evenly"
        textAlign="center"
        rowSpacing={2}
      >
        <Grid item xs={12} md={6}>
          <TextField required id="name" label="Votre nom" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="email" label="Votre e-mail" />
        </Grid>
      </Grid>
      <Divider>OU</Divider>
      <Stack direction="row">
        <ContactEntry label="mathieu@khalypso.fr" icon={<EmailIcon />} />
      </Stack>
    </>
  )
}

const IndexPage: FC = () => {
  return (
    <Layout>
      <ContactForm />
    </Layout>
  )
}

export default IndexPage
