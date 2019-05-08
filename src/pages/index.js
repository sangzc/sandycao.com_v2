import React from "react"
import Header from "../components/header"
import Hero from "../components/hero"
import Work from "../components/work"
import Contact from "../components/contact"
import Footer from "../components/footer"

const IndexPage = () => (
  <>
    <Header />
    <Hero />
    <Work name="work"/>
    <Contact name="contact"/>
    <Footer />
  </>
)

export default IndexPage
