'use client'

import { Container } from './page.styled'
import { GlobalStyle } from './globalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'

import Header from './components/header'
import Features from './components/features'
import Guarantee from './components/guarantee'
import AboutUs from './components/about-us'
import PDF from './components/pdf'
import Modules from './components/modules'
import SignatureModule from './components/signature-module'
import HowItWorks from './components/how-it-works'
import Footer from './components/footer'

export default function Home() {
  return <ThemeProvider theme={theme}>
    <Container>
      <GlobalStyle />
      <Header />
      <PDF />
      <Modules />
      <Features />
      <Guarantee />
      <SignatureModule />
      <HowItWorks />
      <AboutUs />
      <Footer />
    </Container>
  </ThemeProvider>
}
