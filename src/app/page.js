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
import SignatureModules from './components/signature-modules'
import Footer from './components/footer'

export default function Home() {
  return <ThemeProvider theme={theme}>
    <Container>
      <GlobalStyle />
      <Header />
      <PDF />
      <Features />
      <Guarantee />
      <SignatureModules />
      <AboutUs />
      <Footer />
    </Container>
  </ThemeProvider>
}
