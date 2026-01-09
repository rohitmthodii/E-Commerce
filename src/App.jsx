import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import BudgetCards from './Components/BudgetCards'
import NewArrivals from './Components/NewArrivals'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <BudgetCards />
      <NewArrivals />
    </div>
  )
}

export default App
