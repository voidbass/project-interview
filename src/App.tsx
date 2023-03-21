import React, { type FunctionComponent } from 'react'

import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
import ErrorBoundary from '@/layout/ErrorBoundary'

import CustomRouter from '@/routes/CustomRouter'

import '@/assets/scss/index.scss'

const App: FunctionComponent = () => {
  return (
    <div className="container">
      <Header />
      <ErrorBoundary>
        <CustomRouter />
      </ErrorBoundary>
      <Footer />
    </div>
  )
}

export default App
