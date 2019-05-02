import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Work from "../components/Work"
import Contact from "../components/Contact"
import styled from 'styled-components';

const HeaderStyle = styled.div`
    background-color: blue;
    height: 70px;
    width: 100vw;
    position: relative;
`

const IndexPage = () => (
  <>
    <HeaderStyle>
      <Header />
    </HeaderStyle>
    <Hero />
    <About name="about"/>
    <Work name="work"/>
    <Contact name="contact"/>
  </>
)

export default IndexPage
