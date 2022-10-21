import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {setUserNameGlobal} from '../../store/slices/userName.slice'

const FomrHome = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submit = e => {
    e.preventDefault()
    dispatch(setUserNameGlobal(e.target.firstChild.value.trim()))
    navigate('/pokedex')
  }

  return (
    <form onSubmit={submit} className='pokedexHome__form'>
        <input className='pokedexHome__input' type="text" placeholder='Enter your name here.'/>
        <button className='pokedexHome__btn'>Catch them all</button>
    </form>
  )
}

export default FomrHome