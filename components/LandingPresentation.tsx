import React, { FC } from 'react'
import { GoldCircle } from './GoldCircle'

export const SiteTitle: FC = () => (
  <h1 className="text-primary-contrastText text-8xl">Khalypso</h1>
)

export const Quote: FC = () => (
  <h4 className="text-primary-contrastText text-3xl">
    Concevoir. Déployer. Maintenir.
  </h4>
)

const LandingPresentation: FC = () => (
  <div className="flex flex-col gap-4 items-center">
    <SiteTitle />
    <GoldCircle />
    <Quote />
  </div>
)

export default LandingPresentation
