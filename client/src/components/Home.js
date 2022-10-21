import WorkBench from './WorkBench'
import Nav from './Nav'
import { useState } from 'react'
import axios from 'axios'

const Home = (props) => {
  return (
    <main>
      <Nav />
      <h1>Computer Workbench</h1>
      <h3>Create a Workbench or Join an exisiting one</h3>
      <div className="wbButtons">
        <button>Create New</button>
        <button>Join Exisiting</button>
      </div>
    </main>
  )
}

export default Home
