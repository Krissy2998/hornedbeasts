import React from 'react'

export default function (props) {
  return (
    <div>
        <h2>{props.title}</h2>
        <p>{props.para}</p>
        <img src={props.imgUrl}></img>
    </div>
  )
}
