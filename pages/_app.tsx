import { FC } from 'react'
import { AppProps } from 'next/app'
import '../styles/globals.css'

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <div className="min-h-screen w-screen bg-primary-dark">
    <div className="container mx-auto">
      <Component {...pageProps} />
    </div>
  </div>
)

export default App
