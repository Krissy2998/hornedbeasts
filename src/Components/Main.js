import React from 'react'
import data from '../data.JSON'
import HornedBeasts from './HornedBeasts'
export default function Main () {
  return (
    <div>
        {data.map(beasts => {
        return <HornedBeasts beasts={beasts}/>})}
    
    </div>
  )
}
