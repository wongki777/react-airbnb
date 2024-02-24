import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Card from "./components/Card"
import data from "./data"

export default function App() {
  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            {...item}

        />
    )
})
    return (
        <div className="container">

            <Navbar />
            <Hero />
            <Main />
            <section className="cards-list">
                {cards}
            </section>
            <Footer />
      </div>
    )
}
