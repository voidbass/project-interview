import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from "@/layout/Header"
import Footer from "@/layout/Footer"
import ErrorBoundary from "@/layout/ErrorBoundary"

import CustomRouter from '@/routes/CustomRouter'
import Home from "@/pages/Home"

import "@/assets/scss/index.scss"

const App = () => {
  return (
    <div className="container">
      <Header />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/error" element={<CustomRouter />} />
        </Routes>
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

export default App
