import React from 'react'
import FomrHome from '../components/home/FomrHome'
import './style/home.css'

const Home = () => {
  return (
    <article className='pokedexHome'>
      <img className='pokedexHome__img' src="/images/home/pokedex.png" alt="" />
      <header className='pokedexHome__header'>
        <h2 className='pokedexHome__subtitle'>Hi Trainer!</h2>
        <p className='pokedexHome__text'>Give me your name to see the pokedex</p>
      </header>
      <FomrHome/>
    </article>
  )
}

export default Home