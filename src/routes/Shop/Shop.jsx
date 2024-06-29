import React from 'react'
import transition from '../../transition'
import Navigation from '../navigation/navigation.component';

const Shop = () => {
  return (
    <>
      <Navigation />
      <h1 className="text-8xl">Shop</h1>
    </>
  )
}

export default transition(Shop, "Shop");