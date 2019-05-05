import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Work from "../components/Work"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const IndexPage = () => (
  <>
    <Header />
    <Hero />
    <Work name="work"/>
    <About name="about"/>
    <Contact name="contact"/>
    <Footer />
  </>
)

export default IndexPage
