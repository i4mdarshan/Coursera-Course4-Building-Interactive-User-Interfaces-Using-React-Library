import React from 'react'
import Button from './Button'

const CardHeader = () => {
  return (
    <>
        <div className="card-header bg-light">
            <div className="row">
                <div className="col-md-6">
                    <Button variant="secondary" title="Pomodoro"/>
                </div>
                <div className="col-md-6">
                    <Button variant="secondary" title="Short Break"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default CardHeader