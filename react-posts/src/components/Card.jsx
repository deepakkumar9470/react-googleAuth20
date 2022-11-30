import React from 'react'

import './card.css'

const Card = ({post}) => {
  return (
    <div className="card">
        <span className="title">{post.title}</span>
        <p className="desc">{post.desc}</p>
        <button className="readMoreBtn">Read More</button>
    </div>
  )
}

export default Card