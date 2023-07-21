import React from 'react'

export default function HornedBeasts({beasts}) {
  return (
    <div>
        <h2>{beasts.title}</h2>
        <img src={beasts.image_url}/>
        <p>{beasts.description}</p>
    </div>
   
  )
}
