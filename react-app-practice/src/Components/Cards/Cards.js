import React from 'react'
import './style.css';

function Cards() {
  return (
    <div>
    <div className="card" id='card'>
  <img className="card-img-top" src="..." alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card" id='card'>
  <img className="card-img-top" src="..." alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
  )
}

export default Cards
