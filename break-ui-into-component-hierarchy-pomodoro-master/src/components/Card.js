import React from 'react'
import Button from './Button'
import CardHeader from './CardHeader'

const Card = () => {
  return (
    <>
        <div className="card my-5">
            <CardHeader/>
            <div className="card-body">
                <h1 className='display-1 jumbotron'>25:00</h1>
                <Button variant="primary" title="Start"/>
            </div>
        </div>
    </>
  )
}

export default Card