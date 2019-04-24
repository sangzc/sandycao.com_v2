import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Work from "../components/Work"
import Contact from "../components/Contact"

const IndexPage = () => (
  <>
    <Header />
    <Hero />
    <About name="about"/>
    <Work name="work"/>
    <Contact name="contact"/>
  </>
)

export default IndexPage
