import React, { FC } from 'react'
import LandingPresentation from '../components/LandingPresentation'
import LandingArguments from '../components/LandingArguments'
import { NextPage } from 'next'

const IndexPage: FC<NextPage> = () => {
  return (
    <div className="flex flex-col gap-6">
      <LandingPresentation />
      <div className="flex-grow border-t border-gray-500"></div>
      <LandingArguments />
    </div>
  )
}

export default IndexPage
